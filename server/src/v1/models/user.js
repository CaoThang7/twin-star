const mongoose = require("mongoose");
const { userDB } = require('../databases/initMongodb')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: '',
    },
    phone: {
        type: String,
        default: '',
    },
    role: {
        type: String,
        default: 'user',
    },
}, {
    timestamps: true
});

module.exports = {
    USER: userDB.model("users", userSchema)
}
