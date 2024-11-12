const express=require('express');
const menuItemController=require('../Controller/menuItem.Controller');
const router=express.Router();
const authMiddleware=require('../Middleware/restaurantAuth.Middleware');
// 
router.route('/addMenuItem').post(authMiddleware,menuItemController.createMenuItem);

router.route('/getMenuItem/:restaurantId').get(menuItemController.getMenuItem);

module.exports=router;