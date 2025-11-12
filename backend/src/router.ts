import path from 'node:path';

import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/services/categories/listCategories";
import { createCategory } from "./app/services/categories/createCategory";
import { listProducts } from "./app/services/products/listProducts";
import { createProduct } from "./app/services/products/createProduct";
import { listProductsByCategory } from './app/services/categories/listProductsByCategory';
import { listOrders } from './app/services/orders/listOrders';
import { changeOrderStatus } from './app/services/orders/changeOrderStatus';
import { deleteOrder } from './app/services/orders/deleteOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories

router.get('/categories', listCategories);

// Create categories
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// List products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', listOrders);

// Create orders
router.post('/orders', (req, res) => {
  res.send("OK");
});

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', deleteOrder);
