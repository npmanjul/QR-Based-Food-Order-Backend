const express = require('express');
const cloudinary = require('../Utils/cloudinaryConfig'); 
const upload = require('../Utils/multerConfig'); 
const fs = require('fs');
const uploadImage = require('../Controller/uploadImage.Controller');
const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;
