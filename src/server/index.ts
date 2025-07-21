import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { ProtoGrpcType } from '../generated/example';
import { ExampleRequest } from '../generated/example/ExampleRequest';
import { ExampleResponse } from '../generated/example/ExampleResponse';
import { ExampleServiceHandlers } from '../generated/example/ExampleService';

const PROTO_PATH = path.join(__dirname, '../../proto/example.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const handlers: ExampleServiceHandlers = {
  UnaryCall(call: grpc.ServerUnaryCall<ExampleRequest, ExampleResponse>, callback: grpc.sendUnaryData<ExampleResponse>) {
    console.log(`Server received: ${call.request.message}`);
    callback(null, {
      message: `Hello from server! You said: ${call.request.message}`,
      status: 200
    });
  },

  ServerStreamingCall(call: grpc.ServerWritableStream<ExampleRequest, ExampleResponse>) {
    console.log(`Server streaming received: ${call.request.message}`);
    
    for (let i = 0; i < 5; i++) {
      call.write({
        message: `Stream response ${i} for: ${call.request.message}`,
        status: 200
      });
    }
    
    call.end();
  },

  ClientStreamingCall(call: grpc.ServerReadableStream<ExampleRequest, ExampleResponse>, callback: grpc.sendUnaryData<ExampleResponse>) {
    const messages: string[] = [];
    
    call.on('data', (request: ExampleRequest) => {
      console.log(`Server received streaming: ${request.message}`);
      messages.push(request.message);
    });

    call.on('end', () => {
      callback(null, {
        message: `Received ${messages.length} messages`,
        status: 200
      });
    });
  },

  BidirectionalStreamingCall(call: grpc.ServerDuplexStream<ExampleRequest, ExampleResponse>) {
    call.on('data', (request: ExampleRequest) => {
      console.log(`Server received bidirectional: ${request.message}`);
      call.write({
        message: `Echo: ${request.message}`,
        status: 200
      });
    });

    call.on('end', () => {
      call.end();
    });
  }
};

function createServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(proto.example.ExampleService.service, handlers);
  return server;
}

export default createServer;