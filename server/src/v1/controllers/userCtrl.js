const { USER } = require('../models/user');
const logEvents = require('../../../helpers/logEvent');

const userCtrl = {
    getUser: async (req, res) => {
        try {
            const user = await USER.findById(req.params.id).select('-password')
            if (!user) {
                logEvents(`${req.url} --- ${req.method} --- ${"User does not exist."}`)
                return res.status(400).json({ msg: "User does not exist." })
            }
            res.json({ user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { user_id, fullname, avatar, phone } = req.body
            const user = await USER.findByIdAndUpdate(user_id, {
                fullname, avatar, phone
            });
            if (user) {
                res.json({ msg: "Update Success!" })
            } else {
                logEvents(`${req.url} --- ${req.method} --- ${"Update Fail!"}`)
                res.json({ msg: "Update Fail!" })
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = userCtrl