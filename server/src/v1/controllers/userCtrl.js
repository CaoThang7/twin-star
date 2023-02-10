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
}

module.exports = userCtrl