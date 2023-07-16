// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://202010650:OCIfyXCTw9AEyASC@sandbox.btzyzmi.mongodb.net/an22_sample_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes'); // Add this line

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes); // Add this line

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API is now online on port ${port}`);
});
