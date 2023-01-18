const express = require('express')

const mongoose = require('mongoose')

const db = require('./config/db')

const PORT = 3000

// const customerRoutes = require('./routes/customer-routes')

mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const app = express()

app.use(express.json())

app.listen(PORT, () => {
	console.log('listening on port ' + PORT)
})