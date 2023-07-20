const User = require('../utils/model')
exports.register = async (request, response, next) => {
    const { firstName, lastName, location, title, techStacks, isMentor, image } = request.body;
    try {
        await User.create({ firstName, lastName, location, title, techStacks, isMentor, image })
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