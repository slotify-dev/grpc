/* eslint-disable */
import { Registry, collectDefaultMetrics, Gauge } from 'prom-client';
import type * as grpc from '@grpc/grpc-js';

const registry = new Registry();
collectDefaultMetrics({ register: registry });

// Custom metrics
const activeConnections = new Gauge({
  name: 'grpc_server_active_connections',
  help: 'Number of active gRPC connections',
  registers: [registry],
});

const rpcCount = new Gauge({
  name: 'grpc_server_rpc_count',
  help: 'Total count of RPC calls',
  labelNames: ['method', 'code'],
  registers: [registry],
});

export default function setupMetrics(server: grpc.Server) {
  return {
    start: () => {
      // Start metrics collection
      // In a real app, you'd expose these via an HTTP endpoint
      console.log('Metrics collection started');
    },
    stop: () => {
      console.log('Metrics collection stopped');
    },
    getRegistry: () => registry,
    incrementRpcCount: (method: string, code: string) => {
      rpcCount.labels(method, code).inc();
    },
    updateConnections: (count: number) => {
      activeConnections.set(count);
    },
  };
}