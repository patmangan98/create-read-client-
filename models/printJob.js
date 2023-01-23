const mongoose = require('mongoose')

const Schema = mongoose.Schema

const printSchema = new Schema(
    {
        weight: {
            type: String, 
            required: true, 
        },
        hoursToPrint : {
            type: String, 
            required: true,
        },
        description: {
            type: String, 
            required: true, 
        },

}) 

const PrintJob = mongoose.model('PrintJob', printSchema)

module.exports = PrintJob