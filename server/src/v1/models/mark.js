const mongoose = require("mongoose");
const { userDB } = require('../databases/initMongodb')

const markSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "products",
        required: true,
    }
}, {
    collection: "marks",
    timestamps: true
});

module.exports = {
    MARK: userDB.model("marks", markSchema)
}