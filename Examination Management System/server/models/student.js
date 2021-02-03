const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
   name:String,
   lastname:String,
   phone:Number,
   gender:String,
   grade:String,

})



module.exports =mongoose.model('Student',studentSchema)