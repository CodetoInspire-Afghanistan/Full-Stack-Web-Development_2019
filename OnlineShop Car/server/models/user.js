const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    address:{type:Schema.Types.ObjectId,ref:"Address"}
})
module.exports=mongoose.model('User',userSchema)