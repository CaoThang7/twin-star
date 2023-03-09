const { MARK } = require('../models/mark');
const logEvents = require('../../../helpers/logEvent');

const markCtrl = {
    createMark: async (req, res) => {
        try {
            const { user_id, product_id } = req.body
            const user_productId = await MARK.findOne({ product_id })

            if (user_productId) {
                return res.status(400).json({ msg: "product has been saved" })
            }

            const newMark = new MARK({
                user_id,
                product_id,
            })

            await newMark.save()

            res.json({
                msg: 'Mark Product Success!',
                data: {
                    ...newMark._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteMark: async (req, res) => {
        try {
            const mark = await MARK.findById(req.params.id);
            if (mark) {
                await mark.remove();
                res.json({ msg: "Delete Mark Product!", })
            } else {
                logEvents(`${req.url} --- ${req.method} --- ${"Mark Product Not Found"}`)
                res.status(404).send({ message: 'Mark Product Not Found' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getMarkUserId: async (req, res) => {
        try {
            const marks = await MARK.find({ user_id: req.params.user_id }).populate([
                "product_id",
                "user_id",
            ]);
            res.json({ marks })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = markCtrl