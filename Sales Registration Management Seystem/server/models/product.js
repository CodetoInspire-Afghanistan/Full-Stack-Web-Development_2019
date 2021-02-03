const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    owner: { type: Schema.Types.ObjectId, ref: "Owner"},
    price: Number,
    NQuantity: Number,
    date:Number
})

module.exports = mongoose.model('Product', productSchema)
