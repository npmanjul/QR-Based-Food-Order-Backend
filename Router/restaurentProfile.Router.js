const express=require('express');
const restaurentProfileController=require('../Controller/restaurantProfile.Controller');
const router=express.Router();
const authMiddleware=require('../Middleware/restaurantAuth.Middleware');
const upload = require('../Utils/multerConfig'); 

router.route('/restaurentInfo/:id').get(authMiddleware,restaurentProfileController.getrestaurantInfo);
router.route('/restaurentLogo/:id').patch(authMiddleware,upload.single('image'),restaurentProfileController.updateRestaurantLogo);
module.exports=router;
