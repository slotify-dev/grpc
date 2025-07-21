/**
 * Backend-for-Frontend (BFF)
 * 
 * A Backend-for-Frontend (BFF) acts as an adapter between your web/mobile clients and your gRPC microservices. 
 * Here's how to implement one effectively:
 * 
 * WebApp/Mobile[REST/GraphQL] -> BFF[gRPC] -> [Product/Order/User]Service
 */

/* eslint-disable */
import express from 'express';

import { ProductClient } from '../clients/product-client';
import { OrderClient } from '../clients/order-client';

const router = express.Router();
const productClient = new ProductClient('product-service:50051');
const orderClient = new OrderClient('order-service:50052');

// Aggregate data from multiple services
router.get('/products/:id/with-orders', async (req, res) => {
  try {
    const [product, orders] = await Promise.all([
      productClient.getProduct(req.params.id),
      orderClient.getOrdersForProduct(req.params.id)
    ]);
    
    res.json({
      product,
      orders,
      lastUpdated: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Transform gRPC responses for web
router.get('/products', async (req, res) => {
  const { maxPrice, minStock } = req.query;
  const products = await productClient.listProducts({
    maxPrice: Number(maxPrice),
    minStock: Number(minStock)
  });
  
  // Convert to web-friendly format
  res.json(products.map(p => ({
    id: p.id,
    name: p.name,
    price: `$${p.price.toFixed(2)}`,
    inStock: p.stock > 0
  })));
});

export default router;