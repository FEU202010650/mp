const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  userOrders: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    orderId: {
      type: String,
      required: false
    }
  }]
});

module.exports = mongoose.model('Product', productSchema);
