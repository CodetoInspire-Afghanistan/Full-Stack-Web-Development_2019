const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({

    fname: String,
    category: String,
    amount: Number,
    email: {
        type: String, required: true, unique: true
    },
    address: {type: String, required: true},


})

module.exports = mongoose.model('User', userSchema)