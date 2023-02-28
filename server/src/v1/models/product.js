const mongoose = require("mongoose");
const { userDB } = require('../databases/initMongodb')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    video: {
        type: String,
        default: "",
    },
    popular: {
        type: String,
        default: "",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categorys',
        required: true
    },
    viewer: {
        type: Number,
        default: 0,
    },
}, {
    collection: "products",
    timestamps: true
});

module.exports = {
    PRODUCT: userDB.model("products", productSchema)
}