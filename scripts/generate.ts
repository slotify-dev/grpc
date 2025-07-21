import { mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';

const generatedDir = './src/generated';

// Create directory if it doesn't exist
if (!existsSync(generatedDir)) {
  mkdirSync(generatedDir, { recursive: true });
}

// Execute protoc command
try {
  execSync(
    `grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${generatedDir} \
    --js_out=import_style=commonjs,binary:${generatedDir} \
    --grpc_out=grpc_js:${generatedDir} \
    -I ./proto \
    ./proto/*.proto`,
    { stdio: 'inherit' }
  );
  console.log('✅ Proto files generated successfully');
} catch (error) {
  console.error('❌ Failed to generate proto files');
  process.exit(1);
}