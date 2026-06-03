import { Product } from "../models/Product.js";

const fallbackProducts = [
  {
    id: "demo-1",
    name: "Everyday Backpack",
    category: "Bags",
    price: 79,
    stock: 24,
  },
  {
    id: "demo-2",
    name: "Wireless Desk Lamp",
    category: "Home",
    price: 42,
    stock: 12,
  },
];

export async function listProducts(_req, res, next) {
  try {
    if (!process.env.MONGODB_URI) {
      res.json(fallbackProducts);
      return;
    }

    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function createProduct(req, res, next) {
  try {
    if (!process.env.MONGODB_URI) {
      res.status(201).json({
        id: `demo-product-${Date.now()}`,
        ...req.body,
      });
      return;
    }

    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}
