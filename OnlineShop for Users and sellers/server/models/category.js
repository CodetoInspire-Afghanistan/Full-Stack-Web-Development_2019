const mongoos = require('mongoose')
const Schema  = mongoos.Schema

const categoryShema = new Schema({
    type: String

})

module.exports = mongoos.model('Category', categoryShema)