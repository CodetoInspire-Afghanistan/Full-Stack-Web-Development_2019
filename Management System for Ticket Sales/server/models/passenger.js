const mongoose = require('mongoose')
const Schema = mongoose.Schema

const passengerSchema = new Schema({
    name:String,
    lastname:String,
    gender:String,
    passportNumber:Number,
    phone:Number,
    address:String,
    from:String,
    regesterdate:String,
    traveldate:String,
    driver:{type:Schema.Types.ObjectId, ref:'Driver'},
    car:{type:Schema.Types.ObjectId, ref:'Car'}
})

module.exports =mongoose.model('Passenger',passengerSchema)