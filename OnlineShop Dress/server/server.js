const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./modles/user')

const multer = require('multer')
const cors = require('cors')


dotenv.config()

const app = express()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../admin/static/images')
        cb(null, '../client/static/images')
        
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname);
    }
})

app.use(multer({storage: fileStorage}).single('image'))


Mongoose.connect(process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    err => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connet to Database')
    }
})

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const addproductRout = require('./rout/Product')
const categoryRout = require('./rout/category')
const userRout = require('./rout/auth') 

app.use('/api', addproductRout)
app.use('/api', categoryRout)
app.use('/api', userRout)


app.listen(3000, err => {
    console.log('Listening on port ', 3000)
})