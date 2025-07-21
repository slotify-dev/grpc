// src/generated/types.d.ts
import type { ProductServiceService } from './product_grpc_pb';
import type * as product_pb from './product_pb';

export interface ProtoGrpcType {
  product: {
    ProductService: typeof ProductServiceService;
    Product: typeof product_pb.Product;
    ProductRequest: typeof product_pb.ProductRequest;
    ProductFilter: typeof product_pb.ProductFilter;
    CreateProductRequest: typeof product_pb.CreateProductRequest;
    ProductSummary: typeof product_pb.ProductSummary;
    ProductUpdate: typeof product_pb.ProductUpdate;
  };
}