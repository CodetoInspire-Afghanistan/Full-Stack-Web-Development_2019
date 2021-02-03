const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const booksSchema = new Schema ({
    
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    title: String,
    price: Number,
    photo: String,
    quantity: Number


})

module.exports = mongoose.model('Book', booksSchema)