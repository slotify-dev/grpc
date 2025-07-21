// package: example
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as example_pb from "./example_pb";

interface IExampleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unaryCall: IExampleServiceService_IUnaryCall;
    serverStreamingCall: IExampleServiceService_IServerStreamingCall;
    clientStreamingCall: IExampleServiceService_IClientStreamingCall;
    bidirectionalStreamingCall: IExampleServiceService_IBidirectionalStreamingCall;
}

interface IExampleServiceService_IUnaryCall extends grpc.MethodDefinition<example_pb.ExampleRequest, example_pb.ExampleResponse> {
    path: "/example.ExampleService/UnaryCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.ExampleRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ExampleRequest>;
    responseSerialize: grpc.serialize<example_pb.ExampleResponse>;
    responseDeserialize: grpc.deserialize<example_pb.ExampleResponse>;
}
interface IExampleServiceService_IServerStreamingCall extends grpc.MethodDefinition<example_pb.ExampleRequest, example_pb.ExampleResponse> {
    path: "/example.ExampleService/ServerStreamingCall";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<example_pb.ExampleRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ExampleRequest>;
    responseSerialize: grpc.serialize<example_pb.ExampleResponse>;
    responseDeserialize: grpc.deserialize<example_pb.ExampleResponse>;
}
interface IExampleServiceService_IClientStreamingCall extends grpc.MethodDefinition<example_pb.ExampleRequest, example_pb.ExampleResponse> {
    path: "/example.ExampleService/ClientStreamingCall";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<example_pb.ExampleRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ExampleRequest>;
    responseSerialize: grpc.serialize<example_pb.ExampleResponse>;
    responseDeserialize: grpc.deserialize<example_pb.ExampleResponse>;
}
interface IExampleServiceService_IBidirectionalStreamingCall extends grpc.MethodDefinition<example_pb.ExampleRequest, example_pb.ExampleResponse> {
    path: "/example.ExampleService/BidirectionalStreamingCall";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<example_pb.ExampleRequest>;
    requestDeserialize: grpc.deserialize<example_pb.ExampleRequest>;
    responseSerialize: grpc.serialize<example_pb.ExampleResponse>;
    responseDeserialize: grpc.deserialize<example_pb.ExampleResponse>;
}

export const ExampleServiceService: IExampleServiceService;

export interface IExampleServiceServer {
    unaryCall: grpc.handleUnaryCall<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    serverStreamingCall: grpc.handleServerStreamingCall<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    clientStreamingCall: grpc.handleClientStreamingCall<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    bidirectionalStreamingCall: grpc.handleBidiStreamingCall<example_pb.ExampleRequest, example_pb.ExampleResponse>;
}

export interface IExampleServiceClient {
    unaryCall(request: example_pb.ExampleRequest, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    unaryCall(request: example_pb.ExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    unaryCall(request: example_pb.ExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    serverStreamingCall(request: example_pb.ExampleRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ExampleResponse>;
    serverStreamingCall(request: example_pb.ExampleRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ExampleResponse>;
    clientStreamingCall(callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    clientStreamingCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    clientStreamingCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    clientStreamingCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    bidirectionalStreamingCall(): grpc.ClientDuplexStream<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    bidirectionalStreamingCall(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    bidirectionalStreamingCall(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ExampleRequest, example_pb.ExampleResponse>;
}

export class ExampleServiceClient extends grpc.Client implements IExampleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public unaryCall(request: example_pb.ExampleRequest, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    public unaryCall(request: example_pb.ExampleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    public unaryCall(request: example_pb.ExampleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientUnaryCall;
    public serverStreamingCall(request: example_pb.ExampleRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ExampleResponse>;
    public serverStreamingCall(request: example_pb.ExampleRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<example_pb.ExampleResponse>;
    public clientStreamingCall(callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    public clientStreamingCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    public clientStreamingCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    public clientStreamingCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: example_pb.ExampleResponse) => void): grpc.ClientWritableStream<example_pb.ExampleRequest>;
    public bidirectionalStreamingCall(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ExampleRequest, example_pb.ExampleResponse>;
    public bidirectionalStreamingCall(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<example_pb.ExampleRequest, example_pb.ExampleResponse>;
}
