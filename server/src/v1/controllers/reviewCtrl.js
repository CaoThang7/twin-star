const { REVIEW } = require('../models/review');
const logEvents = require('../../../helpers/logEvent');

const reviewCtrl = {
    createReview: async (req, res) => {
        try {
            const { user_id, product_id, rating_value, comment } = req.body

            const newReview = new REVIEW({
                user_id,
                product_id,
                rating_value,
                comment
            })

            await newReview.save()

            res.json({
                msg: 'Create Review Success!',
                data: {
                    ...newReview._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateReview: async (req, res) => {
        try {
            const { rating_value, comment } = req.body
            const reviewId = await REVIEW.findById(req.params.id);

            if (!reviewId) {
                logEvents(`${req.url} --- ${req.method} --- ${"ReviewId Not Found"}`)
                res.status(400).json({ msg: 'ReviewId Not Found' })
            }

            const updateReviews = await REVIEW.findByIdAndUpdate(
                req.params.id,
                {
                    rating_value: rating_value,
                    comment: comment
                },
                { new: true }
            );

            res.json({
                msg: "Updated Review!",
                data: {
                    ...updateReviews._doc
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteReview: async (req, res) => {
        try {
            const review = await REVIEW.findById(req.params.id);
            if (review) {
                await review.remove();
                res.json({ msg: "Delete Review!", })
            } else {
                logEvents(`${req.url} --- ${req.method} --- ${"Review Not Found"}`)
                res.status(404).send({ message: 'Review Not Found' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllReview: async (req, res) => {
        try {
            const reviewList = await REVIEW.find().populate([
                "product_id",
                "user_id",
            ]);
            res.json({ reviewList })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getReviewProductId: async (req, res) => {
        try {
            const reviews = await REVIEW.find({ product_id: req.params.product_id }).populate([
                "product_id",
                "user_id",
            ]);
            res.json({ reviews })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = reviewCtrl