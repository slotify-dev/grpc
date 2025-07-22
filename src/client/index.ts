/* eslint-disable*/
import * as grpc from '@grpc/grpc-js';

import { ProductRequest } from '../generated/product_pb';
import { ProductServiceClient } from '../generated/product_grpc_pb';

interface ServiceConfig {
  address: string;
  options?: grpc.ChannelOptions;
  credentials?: grpc.ChannelCredentials;
}

export class UnifiedClient {
  private productClient: ProductClient;
  private channels: grpc.Channel[] = [];

  constructor(config: {
    productService: ServiceConfig;
  }) {
    // Initialize all service clients
    this.productClient = this.createClient(ProductServiceClient, config.productService);
  }

  private createClient<T>(
    ClientClass: new (
      address: string,
      creds: grpc.ChannelCredentials,
      options?: grpc.ChannelOptions
    ) => T,
    config: ServiceConfig
  ): T {
    const creds = config.credentials ?? grpc.credentials.createInsecure();
    const channel = new grpc.Channel(
      config.address,
      creds,
      config.options
    );
    this.channels.push(channel);
    return new ClientClass(config.address, creds, config.options);
  }

  // Product Service Methods
  async getProduct(id: string): Promise<Product.AsObject> {
    const request = new ProductRequest();
    request.setId(id);
    return new Promise((resolve, reject) => {
      this.productClient.getProduct(request, (err, response) => {
        if (err) return reject(err);
        resolve(response.toObject());
      });
    });
  }

  // Cleanup all connections
  closeAllConnections(): void {
    this.channels.forEach(channel => {
      channel.close();
    });
    console.log('All gRPC connections closed');
  }
}