import type { ProtoGrpcType } from '../generated/example_grpc_pb';

export function isProtoGrpcType(obj: unknown): obj is ProtoGrpcType {
  return obj !== null && 
         typeof obj === 'object' && 
         'example' in obj && 
         typeof obj.example === 'object';
}