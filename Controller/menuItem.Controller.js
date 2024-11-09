const MenuItem = require('../Models/MenuItem.models');

const createMenuItem = async (req, res) => {
    try {
        const menuItem = new MenuItem({ ...req.body, restaurantId: req.params.restaurantId });
        // console.log(menuItem);
        const menuItemCreated = await MenuItem.create(menuItem);
        res.status(200).json({ message: menuItemCreated });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.find({ restaurant_id: req.params.restaurantId });
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = { createMenuItem, getMenuItem };