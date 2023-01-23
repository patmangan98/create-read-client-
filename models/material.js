const mongoose = require('mongoose')

const Schema = mongoose.Schema

const materialSchema = new Schema(
    {
        materialType: {
            type: String, 
            required: true, 
        },
        weightOfRoll : {
            type: String, 
            required: true,
        },
        color: {
            type: String, 
            required: true, 
        },

}) 

const Material = mongoose.model('Material', materialSchema)

module.exports = Material