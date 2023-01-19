const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const db = require('./config/db')

const PORT = 3000

const customerRoutes = require('./routes/customer-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express()

app.use(cors({origin: 'http://127.0.0.1:5501'}))

app.use(express.json())

app.use(customerRoutes)

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})

module.exports = app