import GRPCClient from '.';

const client = new GRPCClient('localhost:50051');

async function testAllMethods() {
  try {
    // Test Unary Call
    const unaryResponse = await client.unaryCall('Hello from unary client');
    console.log('Unary Response:', unaryResponse);

    // Test Server Streaming
    const serverStreamResponses = await client.serverStreamingCall('Hello from server streaming client');
    console.log('Server Streaming Responses:', serverStreamResponses);

    // Test Client Streaming
    const clientStreamResponse = await client.clientStreamingCall([
      'Message 1',
      'Message 2',
      'Message 3'
    ]);
    console.log('Client Streaming Response:', clientStreamResponse);

    // Test Bidirectional Streaming
    const bidirectionalResponses = await client.bidirectionalStreamingCall([
      'Bidi 1',
      'Bidi 2',
      'Bidi 3'
    ]);
    console.log('Bidirectional Streaming Responses:', bidirectionalResponses);
  } catch (err) {
    console.error('Error:', err);
  }
}

testAllMethods();