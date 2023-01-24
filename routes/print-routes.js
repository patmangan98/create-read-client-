const express = require('express')
const { requireToken } = require('../config/auth')
// const Print = require('../models/print')
const Customer = require('../models/customer')
// const Printr = require('../models/print')

const router = express.Router()

//create
router.post('/prints',  (req, res, next) => {
    const customerId = req.body.print.customerId
    console.log(customerId)
    const print = req.body.print
    
    Customer.findById(customerId)
    .then((customer) => {
        customer.prints.push(print)
        return customer.save()
    })
    .then((customer) => res.status(204).json({customer: customer}))
    .catch(next)
})

// UPDATE
// PATCH /characters/5a7db6c74d55bc51bdf39793
router.patch('/prints/:printId', (req, res, next) => {
    const customerId = req.body.print.customerId
    console.log(customerId)
    const printBody = req.body.print
	Customer.findById(customerId)
		.then((customer) => {
            const print = customer.prints.id(req.params.printId)
			print.set(printBody)
            return customer.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

router.delete('/prints/:printId', (req, res, next) => {
    const customerId = req.body.print.customerId
	Customer.findById(customerId)
		.then((customer) => {
			customer.prints.id(req.params.printId).remove()
            return customer.save()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router