const mongoose = require('mongoose');



const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    variants: [{
        name: String,
        sku: String,
        additionalCost: Number,
        stockCount: Number,
      }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
