const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user')
const multer = require('multer')
const cors = require('cors')

dotenv.config()

const app = express()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../admin/static/images') // images is the name of our folder
    },
    filename: (req, file, cb) => {
        cb(null,  new Date().toISOString().replace(/:/g, '-') + "" + file.originalname)
    }
})

app.use(multer({storage: fileStorage}).single('cv'))

Mongoose.connect(process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
    if(err) {
        console.log(err)
    } else {
        console.log('Connected to Database was successfully')
    }
})


// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

// Get Middleware
// app.get('/', (req, res) => {
//     res.json('This System is about employee Managment System')
// })


// require api
const employeeRoute = require('./routes/employee')
const userRoute = require('./routes/user')
const newuserRoute = require('./routes/auth')

app.use('/api', employeeRoute)
app.use('/api', userRoute)
app.use('/api', newuserRoute)

app.listen(3000, err => {
    console.log('Listening on port ', 3000)
})