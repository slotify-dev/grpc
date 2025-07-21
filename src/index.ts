import createServer from './server';
import { ServerCredentials } from '@grpc/grpc-js';

const server = createServer();

const PORT = 50051;
const URI = `0.0.0.0:${PORT}`;

server.bindAsync(URI, ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${URI}`);
  server.start();
});

process.on('SIGTERM', () => {
  server.tryShutdown(() => {
    process.exit(0);
  });
});