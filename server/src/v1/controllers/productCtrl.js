const { PRODUCT } = require('../models/product');
const logEvents = require('../../../helpers/logEvent');

const productCtrl = {
    createProduct: async (req, res) => {
        try {
            const {
                name,
                title,
                description,
                image,
                video,
                popular,
                category,
            } = req.body

            const newProduct = new PRODUCT({
                name,
                title,
                description,
                image,
                video,
                popular,
                category,
            })

            await newProduct.save()

            res.json({
                msg: 'Create Product Success!',
                data: {
                    ...newProduct._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const productList = await PRODUCT.find();
            res.json({ productList })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getProductId: async (req, res) => {
        try {
            const product = await PRODUCT.findById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                logEvents(`${req.url} --- ${req.method} --- ${"Product Not Found"}`)
                res.status(400).json({ msg: 'Product Not Found' })
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    visitCounter: async (req, res) => {
        try {
            const productId = await PRODUCT.findById(req.params.id);
            if (!productId) {
                logEvents(`${req.url} --- ${req.method} --- ${"ProductId Not Found"}`)
                res.status(400).json({ msg: 'ProductId Not Found' })
            }
            const product = await PRODUCT.findByIdAndUpdate(
                req.params.id,
                {
                    $inc: { viewer: 1 },
                },
                { new: true }
            );
            res.json(product);
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = productCtrl