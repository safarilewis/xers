const User = require('../utils/model')
const multer = require('multer')
//const { upload } = require('../utils/db')

exports.register = async (request, response, next) => {
    const { firstName, lastName, location, title, techStacks, description } = request.body;
    const imageData = request.file ? request.file.buffer : null;
    const imageContentType = request.file ? request.file.mimetype : null;
    let imageUrl = null;
    if (imageData && imageContentType) {
        // Convert the image buffer to a base64-encoded string
        const base64Image = imageData.toString('base64');
        imageUrl = `data:${imageContentType};base64,${base64Image}`;
    }
    try {
        await User.create({ firstName, lastName, location, title, techStacks, description, image: imageUrl })
            .then((user) => {
                response.status(200).json({
                    message: 'User created successfully!',
                    user
                })
            })
    } catch (error) {
        response.status(401).json({
            message: 'User creation failed!',
            error: error.message,
        })
    }
}
