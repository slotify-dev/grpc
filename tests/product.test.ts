import { getProductClient } from '../src/client';
import { describe, it, afterAll } from 'bun:test';

describe('Product Client', () => {
  const client = getProductClient();

  afterAll(() => {
    client.closeConnection();
  });

  it('should fetch product details', async () => {
    const product = await client.getProduct('123');
    expect(product.id).toBe('123');
    expect(product.price).toBeGreaterThan(0);
  });
});