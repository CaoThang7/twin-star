const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/userCtrl")

router.get('/user/:id', auth, userCtrl.getUser)

router.post('/user/update', auth, userCtrl.updateUser)

module.exports = router