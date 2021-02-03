const mogoose = require('mongoose')
const Schema = mogoose.Schema

const companySchema = new Schema({
    // ID: { type: Schema.Type.ObjectId, ref: "User"},
    name: String,
    email: { type: String, required: true, unique: true},
    password: { type: String, required:true},
    job: String,
})

module.exports = mogoose.model('Company', companySchema)