const Order = require('../models/order');
const Product = require('../models/product');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    // Get all products from the database
    const products = await Product.find();

    // Calculate the total amount based on the product prices
    const totalAmount = products.reduce((total, product) => {
      return total + product.price;
    }, 0);

    // Create a sample order with products
    const sampleOrder = {
      products: products.map((product) => ({
        productId: product._id,
        productName: product.name,
        quantity: 1
      })),
      totalAmount
    };

    const newOrder = new Order(sampleOrder);

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while creating the order.' });
  }
};
