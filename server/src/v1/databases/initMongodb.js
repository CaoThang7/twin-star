const mongoose = require('mongoose')

function newConnection(uri) {
    const db = mongoose.createConnection(uri, {
        useNewUrlParser: true
    })

    db.on('error', function (err) {
        console.log(`Mongodb :: connection ${this.name} ${JSON.stringify(err)}`);
        db.close().catch(() => console.log(`Mongodb::: failed to close connection ${this.name}`))
    })

    db.on('connected', function () {
        mongoose.set('debug', (col, method, query, doc) => {
            console.log(`Mongodb Debug:: ${this.name}::${col}.${method}(${JSON.stringify(query)},${JSON.stringify(doc)})`)
        })
        console.log(`Mongodb :: connected ${this.name}`)
    })

    db.on('disconnected', function () {
        console.log(`Mongodb :: disconnected ${this.name} ${JSON.stringify(err)}`)
    })

    return db;
}

const { USER_MONGO_URI, USER_VIP_MONGO_URI } = process.env;
const userDB = newConnection(USER_MONGO_URI);
const uservipDB = newConnection(USER_VIP_MONGO_URI);

module.exports = {
    userDB,
    uservipDB
}

