// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');

function serialize_product_CreateProductRequest(arg) {
  if (!(arg instanceof product_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type product.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductRequest(buffer_arg) {
  return product_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_Product(arg) {
  if (!(arg instanceof product_pb.Product)) {
    throw new Error('Expected argument of type product.Product');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_Product(buffer_arg) {
  return product_pb.Product.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductFilter(arg) {
  if (!(arg instanceof product_pb.ProductFilter)) {
    throw new Error('Expected argument of type product.ProductFilter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductFilter(buffer_arg) {
  return product_pb.ProductFilter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductRequest(arg) {
  if (!(arg instanceof product_pb.ProductRequest)) {
    throw new Error('Expected argument of type product.ProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductRequest(buffer_arg) {
  return product_pb.ProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductSummary(arg) {
  if (!(arg instanceof product_pb.ProductSummary)) {
    throw new Error('Expected argument of type product.ProductSummary');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductSummary(buffer_arg) {
  return product_pb.ProductSummary.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_ProductUpdate(arg) {
  if (!(arg instanceof product_pb.ProductUpdate)) {
    throw new Error('Expected argument of type product.ProductUpdate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_ProductUpdate(buffer_arg) {
  return product_pb.ProductUpdate.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  // Unary RPC
getProduct: {
    path: '/product.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.ProductRequest,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_ProductRequest,
    requestDeserialize: deserialize_product_ProductRequest,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  // Server streaming
listProducts: {
    path: '/product.ProductService/ListProducts',
    requestStream: false,
    responseStream: true,
    requestType: product_pb.ProductFilter,
    responseType: product_pb.Product,
    requestSerialize: serialize_product_ProductFilter,
    requestDeserialize: deserialize_product_ProductFilter,
    responseSerialize: serialize_product_Product,
    responseDeserialize: deserialize_product_Product,
  },
  // Client streaming
createProducts: {
    path: '/product.ProductService/CreateProducts',
    requestStream: true,
    responseStream: false,
    requestType: product_pb.CreateProductRequest,
    responseType: product_pb.ProductSummary,
    requestSerialize: serialize_product_CreateProductRequest,
    requestDeserialize: deserialize_product_CreateProductRequest,
    responseSerialize: serialize_product_ProductSummary,
    responseDeserialize: deserialize_product_ProductSummary,
  },
  // Bidirectional streaming
processProducts: {
    path: '/product.ProductService/ProcessProducts',
    requestStream: true,
    responseStream: true,
    requestType: product_pb.ProductRequest,
    responseType: product_pb.ProductUpdate,
    requestSerialize: serialize_product_ProductRequest,
    requestDeserialize: deserialize_product_ProductRequest,
    responseSerialize: serialize_product_ProductUpdate,
    responseDeserialize: deserialize_product_ProductUpdate,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService, 'ProductService');
