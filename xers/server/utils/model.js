const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,

    },
    lastName: {
        type: String,

    },
    location: {
        type: String,
    },
    title: {
        type: String,

    },
    techStacks: {
        type: Array,

    },
    description: { type: String},
    image: {
        data: Buffer,
        type: String,
        sparse: true
    },
    projects: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "projects",
        sparse: true
    }]
})

//Model
const Model = mongoose.model
const user = Model('users', userSchema)




module.exports = user; 