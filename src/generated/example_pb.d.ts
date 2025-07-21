// package: example
// file: example.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ExampleRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ExampleRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleRequest): ExampleRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleRequest;
    static deserializeBinaryFromReader(message: ExampleRequest, reader: jspb.BinaryReader): ExampleRequest;
}

export namespace ExampleRequest {
    export type AsObject = {
        message: string,
    }
}

export class ExampleResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ExampleResponse;
    getStatus(): number;
    setStatus(value: number): ExampleResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExampleResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExampleResponse): ExampleResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExampleResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExampleResponse;
    static deserializeBinaryFromReader(message: ExampleResponse, reader: jspb.BinaryReader): ExampleResponse;
}

export namespace ExampleResponse {
    export type AsObject = {
        message: string,
        status: number,
    }
}
