const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, isActive } = req.body;

    // Example product
    const exampleProduct = new Product({
      name: 'Example Product',
      description: 'This is an example product',
      price: 9.99,
      isActive: true
    });

    const savedProduct = await exampleProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while creating the product.' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while retrieving the products.' });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found.' });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while retrieving the product.' });
  }
};
