const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
// const User = require('./models/user')

const app = express()

dotenv.config()
Mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, err=>{
    if(err){
        console.log(err)
    } else {
        console.log('Connect to DB')
    }
})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


const userRoute = require('./routes/user')
const companyRoute = require('./routes/company')
const adminRoute = require('./routes/admin')
const authRouter = require('./routes/auth')
app.use('/api', userRoute)
app.use('/api',companyRoute)
app.use('./api', adminRoute)
app.use('./api', authRouter)
   
app.listen(3000, err =>{
    console.log('Listening on port', 3000)
})