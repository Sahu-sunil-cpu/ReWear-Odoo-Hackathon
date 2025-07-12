import Order from "../models/order.models.js";

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user._id })
      .populate("listing", "title imageUrl")
      .populate("seller", "name location");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOrdersBySeller = async (req, res) => {
  try {
    const orders = await Order.find({ seller: req.user._id })
      .populate("listing", "title")
      .populate("buyer", "name");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { listing, seller, shippingAddress, pointsUsed } = req.body;

    const order = new Order({
      listing,
      seller,
      buyer: req.user._id,
      shippingAddress,
      pointsUsed,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
