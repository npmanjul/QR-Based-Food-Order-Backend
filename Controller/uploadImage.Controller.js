const cloudinary = require('../Utils/cloudinaryConfig');
const fs = require('fs');

const uploadImage = async (req, res) => {
    try {
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { folder: 'your-folder-name' });

        // Delete the file after uploading to Cloudinary
        fs.unlinkSync(req.file.path);

        // Send the URL of the uploaded file as a response
        res.json({ url: result.secure_url });
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
};

module.exports = uploadImage;
