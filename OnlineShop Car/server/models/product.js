const mongoose=require('mongoose')
const { schema } = require('./user')

const Schema=mongoose.Schema

const productSchema=new Schema({
    category:{type:Schema.Types.ObjectId,ref:"Category"},
    modal:String,
    description:String,
    photo:String,
    price:Number,
    stockQuantity:Number,
    rating:[Number]
})
module.exports=mongoose.model('Product',productSchema)