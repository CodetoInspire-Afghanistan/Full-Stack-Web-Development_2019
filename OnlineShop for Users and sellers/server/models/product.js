const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    category:{type : Schema.Types.ObjectId, ref: "Category"},
    vendor: {type : Schema.Types.ObjectId, ref: "Vendor"},
    title : String,
    description: String,
    image : String,
    price : Number , 
    stockQuantity : Number,
    rating :[Number]
})

module.exports = mongoose.model('Product', productSchema)