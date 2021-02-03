const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({
   subject:String,
   room:String,
   day:String,
   time:String,
   date:String,
   student:{type:Schema.Types.ObjectId, ref:'Student'},
   teacher:{type:Schema.Types.ObjectId, ref:'Teacher'},

   
})



module.exports =mongoose.model('Exam',examSchema)