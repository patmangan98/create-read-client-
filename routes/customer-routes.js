const express = require('express')
const Customer = require('../models/customer')

const Character = require('../models/customer')

const router = express.Router()

//index
router.get('/customers', (req, res, next) => {
    Customer.find()
        .then((customers) => {
            return customers.map((customer) => customer)
        })
    .then((customers) => res.status(200).json({customers : customers}))
    .catch(next)
})



//create
router.post('/customers', (req, res, next) => {
    Character.create(req.body.customer)
    .then((customer) => {
        res.status(201).json({customer : customer})
    })
    .catch(next)
})

module.exports = router