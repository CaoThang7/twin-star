const router = require('express').Router()
const reviewCtrl = require('../controllers/reviewCtrl')
const auth = require("../middleware/auth")

router.post('/review/createReview', auth, reviewCtrl.createReview)

router.patch('/review/updateReview/:id', auth, reviewCtrl.updateReview)

router.delete('/review/deleteReview/:id', auth, reviewCtrl.deleteReview)

router.get('/review/getAllReview', reviewCtrl.getAllReview)

router.get('/review/getReviewProductId/:product_id', reviewCtrl.getReviewProductId)

router.get('/review/getReviewUserId/:user_id', auth, reviewCtrl.getReviewUserId)

module.exports = router