# gRPC TypeScript Microservice

gRPC is a modern, high-performance Remote Procedure Call (RPC) framework that enables client and server applications to communicate transparently.
Let me break down its architecture and core concepts before we dive into the TypeScript implementation.

## Core Architecture Components

### Protocol Buffers (protobuf)

- Interface Definition Language (IDL): Defines services and message structures in .proto files
- Language-Neutral: Generates code for multiple languages
- Binary Format: More efficient than JSON/XML
- Schema Evolution: Backward/forward compatible through field numbers

### gRPC Server

- Implements service interfaces
- Handles incoming RPC calls
- Manages connections, threading, and concurrency
- Supports interceptors for middleware functionality

### gRPC Client

- Stub that mimics server methods locally
- Manages connections to servers
- Provides different calling styles (blocking/non-blocking)
- Handles load balancing and retries

### Transport Layer

- Uses HTTP/2 as transport protocol
- Enables multiplexing (multiple streams over single connection)
- Supports bidirectional streaming
- Provides flow control and header compression

## Key Communication Patterns

```bash
# Unary RPC (Request-Response)
client -> single request -> server
client <- single response <- server

# Server Streaming RPC
client -> single request -> server
client <- stream of responses <- server

# Client Streaming RPC
client -> stream of requests -> server
client <- single response <- server

# Bidirectional Streaming RPC
client <-> stream of messages <-> server
```

## Project Structure

```bash
grpc-app/
├── proto/                   # Protocol Buffer definitions
│   └── service.proto        # Service contract
├── src/
│   ├── generated/           # Auto-generated code
│   ├── client/              # gRPC client implementation
│   ├── server/              # gRPC server implementation
│   ├── services/            # Business logic
│   ├── types/               # Type definitions
│   ├── utils/               # Utilities
│   └── index.ts             # Entry point
├── test/                    # Tests
├── docker/                  # Docker configs
└── config/                  # Configuration
```

## Running the Project with Bun

```bash
# Install dependencies
bun install

# Generate proto types
bun run generate

# Start the server (with hot reloading)
bun run dev

# Run the client
bun run client
```

## Production Build with Bun

```bash
# Build for production
bun run build

# Run production server
bun run start
```
