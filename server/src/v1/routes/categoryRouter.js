const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')

router.post('/category/createCategory', categoryCtrl.createCategory)

router.get('/category/getAllCategory', categoryCtrl.getAllCategory)

module.exports = router