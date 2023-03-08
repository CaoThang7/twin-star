const router = require('express').Router()
const markCtrl = require('../controllers/markCtrl')
const auth = require("../middleware/auth")

router.post('/mark/createMark', auth, markCtrl.createMark)

router.delete('/mark/deleteMark/:id', auth, markCtrl.deleteMark)

router.get('/mark/getMarkUserId/:user_id', auth, markCtrl.getMarkUserId)

module.exports = router