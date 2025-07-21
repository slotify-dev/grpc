// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as product_pb from "./product_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getProduct: IProductServiceService_IGetProduct;
    listProducts: IProductServiceService_IListProducts;
    createProducts: IProductServiceService_ICreateProducts;
    processProducts: IProductServiceService_IProcessProducts;
}

interface IProductServiceService_IGetProduct extends grpc.MethodDefinition<product_pb.ProductRequest, product_pb.Product> {
    path: "/product.ProductService/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.ProductRequest>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IProductServiceService_IListProducts extends grpc.MethodDefinition<product_pb.ProductFilter, product_pb.Product> {
    path: "/product.ProductService/ListProducts";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<product_pb.ProductFilter>;
    requestDeserialize: grpc.deserialize<product_pb.ProductFilter>;
    responseSerialize: grpc.serialize<product_pb.Product>;
    responseDeserialize: grpc.deserialize<product_pb.Product>;
}
interface IProductServiceService_ICreateProducts extends grpc.MethodDefinition<product_pb.CreateProductRequest, product_pb.ProductSummary> {
    path: "/product.ProductService/CreateProducts";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductSummary>;
    responseDeserialize: grpc.deserialize<product_pb.ProductSummary>;
}
interface IProductServiceService_IProcessProducts extends grpc.MethodDefinition<product_pb.ProductRequest, product_pb.ProductUpdate> {
    path: "/product.ProductService/ProcessProducts";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<product_pb.ProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.ProductRequest>;
    responseSerialize: grpc.serialize<product_pb.ProductUpdate>;
    responseDeserialize: grpc.deserialize<product_pb.ProductUpdate>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer {
    getProduct: grpc.handleUnaryCall<product_pb.ProductRequest, product_pb.Product>;
    listProducts: grpc.handleServerStreamingCall<product_pb.ProductFilter, product_pb.Product>;
    createProducts: grpc.handleClientStreamingCall<product_pb.CreateProductRequest, product_pb.ProductSummary>;
    processProducts: grpc.handleBidiStreamingCall<product_pb.ProductRequest, product_pb.ProductUpdate>;
}

export interface IProductServiceClient {
    getProduct(request: product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    listProducts(request: product_pb.ProductFilter, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    listProducts(request: product_pb.ProductFilter, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    createProducts(callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    createProducts(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    createProducts(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    createProducts(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    processProducts(): grpc.ClientDuplexStream<product_pb.ProductRequest, product_pb.ProductUpdate>;
    processProducts(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<product_pb.ProductRequest, product_pb.ProductUpdate>;
    processProducts(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<product_pb.ProductRequest, product_pb.ProductUpdate>;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getProduct(request: product_pb.ProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.ProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.Product) => void): grpc.ClientUnaryCall;
    public listProducts(request: product_pb.ProductFilter, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    public listProducts(request: product_pb.ProductFilter, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<product_pb.Product>;
    public createProducts(callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    public createProducts(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    public createProducts(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    public createProducts(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.ProductSummary) => void): grpc.ClientWritableStream<product_pb.CreateProductRequest>;
    public processProducts(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<product_pb.ProductRequest, product_pb.ProductUpdate>;
    public processProducts(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<product_pb.ProductRequest, product_pb.ProductUpdate>;
}
