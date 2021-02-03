const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrtherRegSchema = new Schema({
   catagory:{type:Schema.Types.ObjectId,ref:"catagory"},
   name:{type:Schema.Types.ObjectId,ref:"name"},
   num:Number,
   total:Number,
   Date:Number
})


module.exports = mongoose.model('OrtherReg', OrtherRegSchema)