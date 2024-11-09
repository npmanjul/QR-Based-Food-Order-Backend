const Restaurant=require('../Models/restaurantAuth.models')
const MenuItem=require('../Models/MenuItem.models')

const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: req.params.id })
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' })
    }
    return res.status(200).json(restaurant)
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
};

const getRestaurantMenu = async (req, res) => {
  try {
    const restaurant = await MenuItem.find({ restaurant_id: req.params.id })
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' })
    }
    return res.status(200).json(restaurant)
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' })
  }
};

module.exports = {getRestaurant,getRestaurantMenu}
