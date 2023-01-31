const { USER } = require('../models/user');
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const sanitize = require('mongo-sanitize');
const logEvents = require('../../../helpers/logEvent');

const authCtrl = {
    register: async (req, res) => {
        try {
            const { fullname, email, password } = req.body
            const user_fullname = await USER.findOne({ fullname })
            const user_email = await USER.findOne({ email })
            const passwordHash = await bcryptjs.hash(password, 12)

            if (user_fullname) {
                logEvents(`${req.url} --- ${req.method} --- ${"This fullname already exists."}`)
                return res.status(400).json({ msg: "This fullname already exists." })
            }
            if (user_email) {
                logEvents(`${req.url} --- ${req.method} --- ${"This email already exists."}`)
                return res.status(400).json({ msg: "This email already exists." })
            }
            if (password.length < 6) {
                logEvents(`${req.url} --- ${req.method} --- ${"Password must be at least 6 characters."}`)
                return res.status(400).json({ msg: "Password must be at least 6 characters." })
            }

            const newUser = new USER({
                fullname,
                email,
                password: passwordHash,
            })

            const access_token = createAccessToken({ id: newUser._id })
            const refresh_token = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/v1/auth/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })

            await newUser.save()

            res.json({
                msg: 'Register Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const query = { email }
            const user = await USER.findOne(sanitize(query))

            if (!user) {
                logEvents(`${req.url} --- ${req.method} --- ${"This email does not exist."}`)
                return res.status(400).json({ msg: "This email does not exist." })
            }

            const isMatch = await bcryptjs.compare(password, user.password)

            if (!isMatch) {
                logEvents(`${req.url} --- ${req.method} --- ${"Password is incorrect."}`)
                return res.status(400).json({ msg: "Password is incorrect." })
            }

            const access_token = createAccessToken({ id: user._id })
            const refresh_token = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/v1/auth/refresh_token',
                maxAge: 30 * 24 * 60 * 60 * 1000 // 30days
            })

            res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/v1/auth/refresh_token' })
            return res.json({ msg: "Logged out success!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    generateAccessToken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if (!rf_token) {
                logEvents(`${req.url} --- ${req.method} --- ${"Please login now."}`)
                return res.status(400).json({ msg: "Please login now." })
            }

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, async (err, result) => {
                if (err) {
                    logEvents(`${req.url} --- ${req.method} --- ${"Please login now."}`)
                    return res.status(400).json({ msg: "Please login now." })
                }

                const user = await USER.findById(result.id).select("-password")

                if (!user) {
                    logEvents(`${req.url} --- ${req.method} --- ${"This does not exist."}`)
                    return res.status(400).json({ msg: "This does not exist." })
                }

                const access_token = createAccessToken({ id: result.id })

                res.json({
                    access_token,
                    user
                })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
}

module.exports = authCtrl