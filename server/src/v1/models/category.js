const mongoose = require("mongoose");
const { userDB } = require('../databases/initMongodb')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
}, {
    collection: "categorys",
    timestamps: true
});

module.exports = {
    CATEGORY: userDB.model("categorys", categorySchema)
}