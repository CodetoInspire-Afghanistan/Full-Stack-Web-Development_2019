const mongooe= require('mongoose')
const Schema = mongooe.Schema

const vendorSchema = new Schema({
    name: String,
    lastName: String, 
    about: String,
    photo : String

})
module.exports = mongooe.model('Vendor', vendorSchema)