import path from 'path';
import logger from '../../utils/logger';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import type { ProtoGrpcType } from '../../generated/types';
import type { ProductServiceHandlers } from '../../generated/product_grpc_pb';

import type { 
  Product,
  ProductUpdate,
  ProductFilter,
  ProductSummary,
  ProductRequest,
  CreateProductRequest,
} from '../../generated/product_pb';

const PROTO_PATH = path.join(__dirname, '../../../proto/product.proto');

// 1. First create a type guard for safety
function isProductServiceValid(
  obj: unknown
): obj is { ProductService: { service: grpc.ServiceDefinition } } {
  return !!(
    obj &&
    typeof obj === 'object' &&
    'product' in obj &&
    typeof obj.product === 'object' &&
    'ProductService' in obj.product &&
    typeof obj.product.ProductService.service === 'object'
  );
}

export function createProductService(): {
  service: grpc.ServiceDefinition<grpc.UntypedServiceImplementation>;
  handlers: ProductServiceHandlers;
} {
  // 2. Load package definition with proper options
  const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  // 3. Load and verify the proto
  const loadedPackage = grpc.loadPackageDefinition(packageDefinition);
  
  if (!isProductServiceValid(loadedPackage)) {
    throw new Error('Invalid gRPC package structure - missing ProductService');
  }

    // Runtime type checking
  if (!loadedPackage.product?.ProductService) {
    throw new Error('Invalid gRPC package - missing ProductService');
  }

  // 4. Now we can safely cast
  const proto = loadedPackage as unknown as ProtoGrpcType;

  const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    description: 'Latest model smartphone',
    price: 699.99,
    stock: 100
  },
  {
    id: '2',
    name: 'Laptop',
    description: 'High performance laptop',
    price: 1299.99,
    stock: 50
  }
];

  // 6. This return will now be fully type-safe
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    service: proto.product.ProductService.service,
    handlers: {
      GetProduct(call: grpc.ServerUnaryCall<ProductRequest, Product>, callback: grpc.sendUnaryData<Product>) {
        try {
          const productId = call.request.id as string;
          logger.info(`GetProduct request for ID: ${productId}`);
          
          const product = products.find(p => p.id === productId);
          
          if (!product) {
            callback({
              code: grpc.status.NOT_FOUND,
              details: 'Product not found'
            });
            return;
          }
          
          callback(null, product);
        } catch (err) {
          logger.error('GetProduct error:', err);
          callback({
            code: grpc.status.INTERNAL,
            details: 'Internal server error'
          });
        }
      },

      // Server streaming - List products with filter
      ListProducts(call: grpc.ServerWritableStream<ProductFilter, Product>) {
        try {
          const { max_price, min_stock } = call.request;
          logger.info(`ListProducts with filter - max_price: ${max_price}, min_stock: ${min_stock}`);
          
          const filteredProducts = products.filter(p => {
            return (!max_price || p.price <= max_price) &&
                  (!min_stock || p.stock >= min_stock);
          });

          filteredProducts.forEach(product => {
            call.write(product);
          });
          
          call.end();
        } catch (err) {
          logger.error('ListProducts error:', err);
          call.destroy(err);
        }
      },

      // Client streaming - Bulk create products
      CreateProducts(call: grpc.ServerReadableStream<CreateProductRequest, ProductSummary>, callback: grpc.sendUnaryData<ProductSummary>) {
        try {
          let createdCount = 0;
          let totalPrice = 0;
          
          call.on('data', (request: CreateProductRequest) => {
            const newProduct = request.product as Product;
            if (newProduct) {
              products.push(newProduct);
              createdCount++;
              totalPrice += newProduct.price;
              logger.info(`Creating product: ${newProduct.name}`);
            }
          });

          call.on('end', () => {
            callback(null, {
              created_count: createdCount,
              average_price: createdCount > 0 ? totalPrice / createdCount : 0
            });
          });
        } catch (err) {
          logger.error('CreateProducts error:', err);
          callback({
            code: grpc.status.INTERNAL,
            details: 'Internal server error'
          });
        }
      },

      // Bidirectional streaming - Process products
      ProcessProducts(call: grpc.ServerDuplexStream<ProductRequest, ProductUpdate>) {
        try {
          call.on('data', (request: ProductRequest) => {
            const productId = request.id as string;
            const product = products.find(p => p.id === productId);
            
            if (product) {
              // Simulate processing
              call.write({
                id: productId,
                status: 'PROCESSED',
                message: `Successfully processed ${product.name}`
              });
            } else {
              call.write({
                id: productId,
                status: 'ERROR',
                message: 'Product not found'
              });
            }
          });

          call.on('end', () => {
            logger.info('Client ended product processing stream');
            call.end();
          });
        } catch (err) {
          logger.error('ProcessProducts error:', err);
          call.destroy(err);
        }
      }
    },
  };
}