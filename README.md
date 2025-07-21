# gRPC TypeScript Microservice

This is a production-ready gRPC microservice built with TypeScript, featuring containerization, hot reloading, and following software engineering best practices.

## About gRPC

gRPC is a modern, high-performance RPC (Remote Procedure Call) framework that can run in any environment.

Key features:

- Uses Protocol Buffers (protobuf) as interface definition language
- Supports multiple languages
- HTTP/2 based transport
- Four types of service methods:
  - Unary (single request, single response)
  - Server streaming (single request, streamed responses)
  - Client streaming (streamed requests, single response)
  - Bidirectional streaming

## Project Structure

```bash
grpc-typescript/
├── proto/      # Protocol Buffer definitions
├── src/
│ ├── client/   # gRPC client implementation
│ ├── server/   # gRPC server implementation
│ ├── services/ # Service implementations
│ ├── types/    # TypeScript types/interfaces
│ ├── utils/    # Utility functions
│ └── index.ts  # Server entry point
├── test/       # Unit and integration tests
├── docker/     # Docker-related files
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Install dependencies: `npm install`
2. Generate types from proto files: `npm run generate`
3. Start development server: `npm run dev`
4. Run client: `npm run client`

## Development Features

- Hot reloading with ts-node-dev
- TypeScript support
- Protocol Buffer type generation
- Docker containerization
- Production-ready structure

Key Advantages of Using Bun

- Faster Installations: Bun installs dependencies significantly faster than npm/yarn
- Better Performance: Bun's runtime is faster than Node.js for many operations
- Built-in Tools: Comes with test runner, package manager, and bundler
- Built-in Watch Mode: More efficient than ts-node-dev
- Better Compatibility: Handles CommonJS/ESM interop better than Node
- Smaller Docker Images: The oven/bun:slim image is very compact

Potential Considerations

- gRPC Tools: The protocol buffer compiler tools still need to run under Node.js compatibility mode
- Maturity: Bun is newer than Node.js, though it's quite stable for most use cases
- Native Modules: Some native modules might need recompilation
