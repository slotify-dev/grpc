// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ProductRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductRequest;
    static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
    export type AsObject = {
        id: string,
    }
}

export class Product extends jspb.Message { 
    getId(): string;
    setId(value: string): Product;
    getName(): string;
    setName(value: string): Product;
    getDescription(): string;
    setDescription(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getStock(): number;
    setStock(value: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        price: number,
        stock: number,
    }
}

export class ProductFilter extends jspb.Message { 
    getMaxPrice(): number;
    setMaxPrice(value: number): ProductFilter;
    getMinStock(): number;
    setMinStock(value: number): ProductFilter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductFilter.AsObject;
    static toObject(includeInstance: boolean, msg: ProductFilter): ProductFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductFilter;
    static deserializeBinaryFromReader(message: ProductFilter, reader: jspb.BinaryReader): ProductFilter;
}

export namespace ProductFilter {
    export type AsObject = {
        maxPrice: number,
        minStock: number,
    }
}

export class CreateProductRequest extends jspb.Message { 

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): CreateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
    static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
    export type AsObject = {
        product?: Product.AsObject,
    }
}

export class ProductSummary extends jspb.Message { 
    getCreatedCount(): number;
    setCreatedCount(value: number): ProductSummary;
    getAveragePrice(): number;
    setAveragePrice(value: number): ProductSummary;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductSummary.AsObject;
    static toObject(includeInstance: boolean, msg: ProductSummary): ProductSummary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductSummary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductSummary;
    static deserializeBinaryFromReader(message: ProductSummary, reader: jspb.BinaryReader): ProductSummary;
}

export namespace ProductSummary {
    export type AsObject = {
        createdCount: number,
        averagePrice: number,
    }
}

export class ProductUpdate extends jspb.Message { 
    getId(): string;
    setId(value: string): ProductUpdate;
    getStatus(): string;
    setStatus(value: string): ProductUpdate;
    getMessage(): string;
    setMessage(value: string): ProductUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: ProductUpdate): ProductUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductUpdate;
    static deserializeBinaryFromReader(message: ProductUpdate, reader: jspb.BinaryReader): ProductUpdate;
}

export namespace ProductUpdate {
    export type AsObject = {
        id: string,
        status: string,
        message: string,
    }
}
