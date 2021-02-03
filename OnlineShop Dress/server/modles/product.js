const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: String,
    image: { type: String},
    color: { type:String},
    code: { type:String},
    price: { type:Number},
    size: { type:String},
    stockQuantity: Number,
    category: { type:Schema.Types.ObjectId, ref: "Category"}
 })
module.exports = mongoose.model('product', productSchema)