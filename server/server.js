const express = require('express');
const app = express();
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');
var cors = require("cors");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;
const logEvents = require('./helpers/logEvent');
const authRouter = require("./src/v1/routes/authRouter");
const userRouter = require("./src/v1/routes/userRouter");
const productRouter = require("./src/v1/routes/productRouter");
const categoryRouter = require("./src/v1/routes/categoryRouter");
const reviewRouter = require("./src/v1/routes/reviewRouter");
const markRouter = require("./src/v1/routes/markRouter");

// dbs init
require('./src/v1/databases/initMongodb')

// middleware
app.use(helmet());
app.use(morgan('common'));

// add body-parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());
app.use(cookieParser())

// router init
app.use('/v1/auth', authRouter)
app.use('/v1', userRouter)
app.use('/v1', productRouter)
app.use('/v1', categoryRouter)
app.use('/v1', reviewRouter)
app.use('/v1', markRouter)

// Error Handling Middleware called
app.use((req, res, next) => {
    next(createError(404, 'Not found'))
});

// error handler middleware
app.use((error, req, res, next) => {
    logEvents(`${req.url} --- ${req.method} --- ${error.message}`)
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
});

const server = app.listen(PORT, () => {
    console.log(`WSV start with port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log(`exits server express`))
})