const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ownerSchema = new Schema({
    name: String,
    photo: String,
    about: String
})

module.exports= mongoose.model('Owner', ownerSchema)