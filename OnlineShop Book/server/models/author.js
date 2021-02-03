const mongoose =require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
 name: String,
 about: String,
 photo: String
})

module.exports = mongoose.model('Author' , authorSchema)
