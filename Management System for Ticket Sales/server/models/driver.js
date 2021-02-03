const mongoose = require('mongoose')
const Schema = mongoose.Schema

const driverSchema = new Schema({
   name:String,
   lastname:String,
   phone:Number,
   address:String
})

module.exports =mongoose.model('Driver',driverSchema)