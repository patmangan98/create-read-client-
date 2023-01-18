const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema(
    {
        firstName: {
            type: String, 
            required: true, 
        },
        lastName : {
            type: String, 
            required: true,
        },
        contact : {
            type: String, 
            required: true, 
        },
        description: {
            type: String, 
            required: true, 
        }
}) 

const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer 