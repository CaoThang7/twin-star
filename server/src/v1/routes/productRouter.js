const router = require('express').Router()
const productCtrl = require('../controllers/productCtrl')

router.post('/product/createProduct', productCtrl.createProduct)

router.get('/product/getAllProduct', productCtrl.getAllProduct)

router.get('/product/:id', productCtrl.getProductId)

router.patch('/product/visitCounter/:id', productCtrl.visitCounter)

router.get('/product/search/:key', productCtrl.searchProduct)

module.exports = router