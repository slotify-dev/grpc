import * as grpc from '@grpc/grpc-js';
import { ServerCredentials } from '@grpc/grpc-js';
import { createProductService } from './server/services/productService';

import loadConfig from './config';
import logger from './utils/logger';
import setupMetrics from './utils/monitoring';
import HealthService from './server/services/healthService';

// Load configuration
const config = loadConfig();

// Initialize server
const server = new grpc.Server();

// Register services
const healthService = new HealthService();
const productService = createProductService();

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
server.addService(productService.service, productService.handlers);

// Register health service
server.addService(healthService.service, healthService.handlers);

// Setup metrics
const metrics = setupMetrics(server);

// Start server
server.bindAsync(
  `${config.host}:${config.port}`,
  config.tls ? ServerCredentials.createSsl() : ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      logger.error('Server binding failed:', error);
      process.exit(1);
    }
    
    // Set health status to SERVING
    healthService.setStatus('product.ProductService', 'SERVING');
    
    logger.info(`Product Service running at ${config.host}:${port}`);
    metrics.start();
  }
);

// Graceful shutdown
function gracefulShutdown() {
  logger.info('Received shutdown signal');
  healthService.setStatus('product.ProductService', 'NOT_SERVING');
  metrics.stop();
  server.tryShutdown(() => {
    logger.info('Server gracefully stopped');
    process.exit(0);
  });
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);