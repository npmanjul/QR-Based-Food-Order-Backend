const express = require('express')
const router = express.Router()
const userController = require('../Controller/user.Controller')

router.route('/user/:id').get(userController.getRestaurant);
router.route('/menu/:id').get(userController.getRestaurantMenu);


module.exports = router