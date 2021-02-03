const mogoose = require('mongoose')
const Schema = mogoose.Schema

const userSchema = new mogoose.Schema({
    ID: Number,
    name: String,
    lastName: String,
    // phone: Number,
    // email: { type: String, required: true, unique: true},
    // password: { type:String, required: true},
    // age: Number,
    // gender: String,
    // cv: String,
    // work: String,
    // education: String
})

module.exports = mogoose.model('User', userSchema)