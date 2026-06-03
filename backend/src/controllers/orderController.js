import { Order } from "../models/Order.js";

export async function createOrder(req, res, next) {
  try {
    if (!process.env.MONGODB_URI) {
      res.status(201).json({
        id: `demo-order-${Date.now()}`,
        status: "pending",
        ...req.body,
      });
      return;
    }

    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}
