const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    itemname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true,
        required: true
    },
    isVegetarian: {
        type: Boolean,
        default: true,
        required: true
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;