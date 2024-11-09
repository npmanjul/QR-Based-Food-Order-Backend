const express = require('express');
const router = express.Router();
const restaurantAuthController = require('../Controller/restaurantAuth.Controller');
const validation=require('../Middleware/validation.Middleware');
const {registerSchema,loginSchema}=require('../Validate/restaurantAuth.Validation');

router.route('/login').post(validation(loginSchema),restaurantAuthController.login);
router.route('/register').post(validation(registerSchema),restaurantAuthController.register);


module.exports = router;