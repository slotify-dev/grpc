import path from 'path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { isProtoGrpcType } from '../utils/grpc-types';
import type { ExampleRequest} from '../generated/example_pb';
import type { ExampleServiceHandlers } from '../generated/example_grpc_pb';

const PROTO_PATH = path.join(__dirname, '../../proto/example.proto');

// Load proto file with recommended options
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const loadedPackage = grpc.loadPackageDefinition(packageDefinition);
if (!isProtoGrpcType(loadedPackage)) {
  throw new Error('Failed to load package definition - unexpected shape');
}

const proto = loadedPackage;

const serviceImplementation: ExampleServiceHandlers = {
  UnaryCall(
    call: grpc.ServerUnaryCall<ExampleRequest, { message: string; status: number }>,
    callback: grpc.sendUnaryData<{ message: string; status: number }>
  ) {
    console.log(`[${new Date().toISOString()}] Unary call received:`, call.request);
    callback(null, {
      message: `Echo: ${call.request.message}`,
      status: 200
    });
  },

  ServerStreamingCall(
    call: grpc.ServerWritableStream<ExampleRequest, { message: string; status: number }>
  ) {
    console.log(`[${new Date().toISOString()}] Server streaming started`);
    let count = 0;
    const interval = setInterval(() => {
      if (count >= 5) {
        clearInterval(interval);
        call.end();
        return;
      }
      call.write({
        message: `Stream message ${++count}`,
        status: 200
      });
    }, 1000);
  },

  ClientStreamingCall(
    call: grpc.ServerReadableStream<ExampleRequest, { message: string; status: number }>,
    callback: grpc.sendUnaryData<{ message: string; status: number }>
  ) {
    console.log(`[${new Date().toISOString()}] Client streaming started`);
    const messages: string[] = [];
    
    call.on('data', (request: ExampleRequest) => {
      messages.push(request.message as string);
      console.log(`Received chunk: ${request.message}`);
    });

    call.on('end', () => {
      callback(null, {
        message: `Received ${messages.length} messages`,
        status: 200
      });
    });
  },

  BidirectionalStreamingCall(
    call: grpc.ServerDuplexStream<ExampleRequest, { message: string; status: number }>
  ) {
    console.log(`[${new Date().toISOString()}] Bidirectional streaming started`);
    call.on('data', (request: ExampleRequest) => {
      console.log(`Received: ${request.message}`);
      call.write({
        message: `Echo: ${request.message}`,
        status: 200
      });
    });

    call.on('end', () => {
      console.log('Client ended streaming');
      call.end();
    });
  }
};

export default function createServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    proto.example.ExampleService.service,
    serviceImplementation as grpc.UntypedServiceImplementation
  );
  return server;
}