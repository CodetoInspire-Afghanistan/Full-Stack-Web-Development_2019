const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    numberplete:Number,
    type:String
})

module.exports =mongoose.model('Car',carSchema)