const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const amanatSchema = new Schema ({

    category: {type: Schema.Types.ObjectId, ref: "Category"},
    userId: {type: Schema.Types.ObjectId, ref: "User"},
    bookId: {type: Schema.Types.ObjectId, ref: "Book"},
    photo: {
        type: String
    },
    time: String

})

module.exports = mongoose.model('Amanat', amanatSchema)