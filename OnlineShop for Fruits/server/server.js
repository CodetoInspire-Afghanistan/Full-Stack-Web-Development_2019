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
        cb(null, "../admin/static/images") // name of floder that we save our photo 
        cb(null, "../client/static/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        // cb(null, new Date().toISOString() + "-" + file.originalname)
        // cb(null, file.fieldname +'-'+ Date.now()+'.'+ext)
    }
})

app.use(multer({storage: fileStorage}).single('photo')) //photo is name of our field

Mongoose.connect(process.env.DATABASE, 
    {useNewUrlParser: true, useUnifiedTopology: true},
    err => {
    if(err) {
        console.log(err)
    }else{
        console.log('Connected to Database was sucessfully')
    }
})

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// require api
const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')
const ownerRoute = require('./routes/owner')
const userRoute = require('./routes/auth')

app.use('/api', productRoute) // '/api' is a global route because it is at the first of all route
app.use('/api', categoryRoute)
app.use('/api', ownerRoute)
app.use('/api', userRoute)

app.listen(3000, err => {
    console.log('Listening on port ', 3000)
})