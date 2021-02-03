const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema ({

    category: {type: Schema.Types.ObjectId, ref: "Category"},

    type: String,

})

module.exports = mongoose.model('Category', categorySchema)