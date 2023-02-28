const mongoose = require("mongoose");
const { userDB } = require('../databases/initMongodb')

const reviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "products",
        required: true,
    },
    rating_value: {
        type: Number,
    },
    comment: {
        type: String,
    }
}, {
    collection: "reviews",
    timestamps: true
});

module.exports = {
    REVIEW: userDB.model("reviews", reviewSchema)
}