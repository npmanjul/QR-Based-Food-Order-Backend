const Restaurant = require('../Models/restaurantAuth.models');

const register = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        const isRestaurant = await Restaurant.findOne({ email: restaurant.email });
        if (isRestaurant) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const restaurantCreated = await Restaurant.create(req.body);
        res.status(200).json({
            message: "Signup Successful",
            token: await restaurantCreated.generateToken(),
            userId: restaurantCreated._id.toString()
        });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });

    }
}


const login = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        const restaurantExists = await Restaurant.findOne({ email: restaurant.email });
        if (!restaurantExists) {
            return res.status(400).json({ message: "Restaurant does not exist" });
        }
        const isRestaurant = await restaurantExists.comparePassword(restaurant.password);

        if (isRestaurant) {
            res.status(200).json({
                message: "Login Successful",
                token: await restaurantExists.generateToken(),
                userId: restaurantExists._id.toString()
            });
        } else {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", err });
    }
}

module.exports = { login, register };