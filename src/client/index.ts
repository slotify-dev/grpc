import { ProductServiceClient } from '../generated/product_grpc_pb';
import { ProductRequest } from '../generated/product_pb';

import type { Product} from '../generated/product_pb';
import * as grpc from '@grpc/grpc-js';

class ProductClient {
  private client: ProductServiceClient;

  constructor(address: string) {
    this.client = new ProductServiceClient(
      address,
      grpc.credentials.createInsecure(),
      {
        'grpc.max_receive_message_length': 1024 * 1024 * 100, // 100MB
        'grpc.keepalive_time_ms': 10000
      }
    );
  }

  async getProduct(id: string): Promise<Product.AsObject> {
    return new Promise((resolve, reject) => {
      const request = new ProductRequest();
      request.setId(id);

      this.client.getProduct(request, (err, response) => {
        if (err) return reject(err);
        resolve(response.toObject());
      });
    });
  }

  closeConnection(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.client.close();
  }
}

// Singleton instance pattern
let instance: ProductClient;

export function getProductClient(address = 'localhost:50051'): ProductClient {
  if (!instance) {
    instance = new ProductClient(address);
    console.log('Created new gRPC client connection');
  }
  return instance;
}