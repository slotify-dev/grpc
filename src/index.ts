#!/usr/bin/env node
import * as grpc from '@grpc/grpc-js';
import { ServerCredentials } from '@grpc/grpc-js';

// Initialize the gRPC server
const server = new grpc.Server();

// Define server configuration
const PORT = 50051;
const HOST = '0.0.0.0';
const ADDRESS = `${HOST}:${PORT}`;

// Starts the server with insecure credentials (for development)
server.bindAsync(
  ADDRESS,
  ServerCredentials.createInsecure(),
  (error) => {
    if (error) {
      console.error('Server binding failed:', error);
      process.exit(1);
    }
    console.log(`Server running at ${ADDRESS}`);
  }
);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  server.tryShutdown(() => {
    console.log('Server gracefully stopped');
    process.exit(0);
  });
});