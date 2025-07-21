#!/usr/bin/env node
import { mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

// Configuration
const PROTO_DIR = './proto';
const GENERATED_DIR = './src/generated';
const PLUGIN_PATH = './node_modules/.bin/protoc-gen-ts';

// Create directory if it doesn't exist (with recursive option)
if (!existsSync(GENERATED_DIR)) {
  try {
    mkdirSync(GENERATED_DIR, { recursive: true });
    console.log(`Created directory: ${GENERATED_DIR}`);
  } catch (err) {
    console.error(`❌ Failed to create directory ${GENERATED_DIR}:`, err);
    process.exit(1);
  }
}

// Verify proto files exist
try {
  const protoFiles = execSync(`find ${PROTO_DIR} -name "*.proto"`).toString();
  if (!protoFiles.trim()) {
    console.error(`❌ No .proto files found in ${PROTO_DIR}`);
    process.exit(1);
  }
} catch (err) {
  console.error(`❌ Error searching for .proto files:`, err);
  process.exit(1);
}

// Execute protoc command
try {
  console.log('Generating gRPC code...');
  
  const command = [
    'grpc_tools_node_protoc',
    `--plugin=protoc-gen-ts=${PLUGIN_PATH}`,
    `--ts_out=${GENERATED_DIR}`,
    '--js_out=import_style=commonjs,binary:' + GENERATED_DIR,
    '--grpc_out=grpc_js:' + GENERATED_DIR,
    `-I ${PROTO_DIR}`,
    `${PROTO_DIR}/*.proto`
  ].join(' ');

  execSync(command, { 
    stdio: 'inherit',
    shell: '/bin/bash' // Explicit shell for better cross-platform support
  });

  console.log('✅ Proto files generated successfully');
} catch (error) {
  console.error('❌ Failed to generate proto files');
  if (error instanceof Error) {
    console.error('Error details:', error.message);
  }
  process.exit(1);
}