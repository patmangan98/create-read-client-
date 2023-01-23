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
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        prints: [printSchema]
}) 

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer 