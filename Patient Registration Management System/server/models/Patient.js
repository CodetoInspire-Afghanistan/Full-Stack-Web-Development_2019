const mongoose = require('mongoose')
const schema = mongoose.Schema

const patientSchema = new schema({

    Name: String,
    LastName: String,
    Phone: String,
    Occupation: String,
    Problems: String,
    DoctorId:String,
    Date: String,
    Gender: String

})
module.exports = mongoose.model('patient', patientSchema)