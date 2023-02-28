const { CATEGORY } = require('../models/category');

const categoryCtrl = {
    createCategory: async (req, res) => {
        try {
            const { name } = req.body

            const newCategory = new CATEGORY({
                name,
            })

            await newCategory.save()

            res.json({
                msg: 'Create Category Success!',
                data: {
                    ...newCategory._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllCategory: async (req, res) => {
        try {
            const categoryList = await CATEGORY.find();
            res.json({ categoryList })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = categoryCtrl