import createServer from './server';
import { ServerCredentials } from '@grpc/grpc-js';

const PORT = 50051;
const URI = `0.0.0.0:${PORT}`;
const server = createServer();

server.bindAsync(URI, ServerCredentials.createInsecure(), (err, _port) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${URI}`);
});

process.on('SIGTERM', () => {
  server.tryShutdown(() => {
    process.exit(0);
  });
});