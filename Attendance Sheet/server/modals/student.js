const mongoose =require('mongoose')

const Schema=mongoose.Schema
const studentSchema=new Schema({
  class:{type:Schema.Types.ObjectId,ref:"Class"},
  Teacher:{type:Schema.Types.ObjectId,ref:"User"},
    name:String,
    lname:String,
  id:{type:Number,required:true,unique:true},
  attend:[
    {
      status:String,
      date:String
    }
  ],
  photo:String


    
})
module.exports=mongoose.model('Student',studentSchema);