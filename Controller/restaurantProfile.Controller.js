const Restaurant = require('../Models/restaurantAuth.models');
const cloudinary = require('../Utils/cloudinaryConfig');
const fs = require('fs');

const getrestaurantInfo = async (req, res) => {
    const restaurantID = req.params.id;
    const restaurant = await Restaurant.findOne({ _id: restaurantID });
    if (!restaurant) {
        return res.status(404).json({ message: "Restaurant not found" });
    }
    return res.status(200).json(restaurant);
}

const updateRestaurantLogo = async (req, res) => {
    try {
        const restaurantID = req.params.id;
        const restaurant = await Restaurant.findOne({ _id: restaurantID });
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        const result = await cloudinary.uploader.upload(req.file.path, { folder: '/' });

        restaurant.restaurantlogo = result.secure_url;

        fs.unlinkSync(req.file.path);
    } catch (error) {
        console.log(error);
    }

}

module.exports = { getrestaurantInfo, updateRestaurantLogo };