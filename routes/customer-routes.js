const express = require('express')

const Character = require('../models/customer')

const router = express.Router()

router.post('/customers', (req, res, next) => {
    Character.create(req.body.customer)
    .then((customer) => {
        res.status(201).json({customer : customer})
    })
    .catch(next)
})

module.exports = router