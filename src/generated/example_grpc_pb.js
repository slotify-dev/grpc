// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_example_ExampleRequest(arg) {
  if (!(arg instanceof example_pb.ExampleRequest)) {
    throw new Error('Expected argument of type example.ExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleRequest(buffer_arg) {
  return example_pb.ExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExampleResponse(arg) {
  if (!(arg instanceof example_pb.ExampleResponse)) {
    throw new Error('Expected argument of type example.ExampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleResponse(buffer_arg) {
  return example_pb.ExampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleServiceService = exports.ExampleServiceService = {
  unaryCall: {
    path: '/example.ExampleService/UnaryCall',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.ExampleRequest,
    responseType: example_pb.ExampleResponse,
    requestSerialize: serialize_example_ExampleRequest,
    requestDeserialize: deserialize_example_ExampleRequest,
    responseSerialize: serialize_example_ExampleResponse,
    responseDeserialize: deserialize_example_ExampleResponse,
  },
  serverStreamingCall: {
    path: '/example.ExampleService/ServerStreamingCall',
    requestStream: false,
    responseStream: true,
    requestType: example_pb.ExampleRequest,
    responseType: example_pb.ExampleResponse,
    requestSerialize: serialize_example_ExampleRequest,
    requestDeserialize: deserialize_example_ExampleRequest,
    responseSerialize: serialize_example_ExampleResponse,
    responseDeserialize: deserialize_example_ExampleResponse,
  },
  clientStreamingCall: {
    path: '/example.ExampleService/ClientStreamingCall',
    requestStream: true,
    responseStream: false,
    requestType: example_pb.ExampleRequest,
    responseType: example_pb.ExampleResponse,
    requestSerialize: serialize_example_ExampleRequest,
    requestDeserialize: deserialize_example_ExampleRequest,
    responseSerialize: serialize_example_ExampleResponse,
    responseDeserialize: deserialize_example_ExampleResponse,
  },
  bidirectionalStreamingCall: {
    path: '/example.ExampleService/BidirectionalStreamingCall',
    requestStream: true,
    responseStream: true,
    requestType: example_pb.ExampleRequest,
    responseType: example_pb.ExampleResponse,
    requestSerialize: serialize_example_ExampleRequest,
    requestDeserialize: deserialize_example_ExampleRequest,
    responseSerialize: serialize_example_ExampleResponse,
    responseDeserialize: deserialize_example_ExampleResponse,
  },
};

exports.ExampleServiceClient = grpc.makeGenericClientConstructor(ExampleServiceService, 'ExampleService');
