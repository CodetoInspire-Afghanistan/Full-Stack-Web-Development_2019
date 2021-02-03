const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String
    },
    age: {
        type: Number
    },
    gender:{
        type: String,
    },
    cv:{
        type: String
    },
    comment:{
      type: String
    },
    sendEmail: {
      type: String
    },
    status:{
      type: String
    },
    phone:{
      type: String
    },
    birthday:{
      type:String
    }
  });
  

module.exports = mongoose.model('Employee', employeeSchema);
