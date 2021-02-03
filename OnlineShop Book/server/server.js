const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
// const User = require('./models/user')
const multer = require('multer')
const cors = require('cors')

dotenv.config()

const app = express()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../admin/static/images')
        cb(null, '../client/static/images')

    },
    filename: (req, file, cb)=>{
        cb(null, new Date().toISOString + "-"+ file.originalname)
    }
})

app.use(multer({storage: fileStorage}).single('photo'))

Mongoose.connect(process.env.DATABASE,
     { useNewUrlParser: true, useUnifiedTopology: true },
      err =>{
    if(err){
        console.log(err)
    }else{
        console.log('connect to Database')
    }
})

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//require api
const bookRoute = require('./routes/book')
const categoryRoute = require('./routes/category')
const authorRoute = require('./routes/author')
const userRoute = require('./routes/auth')



app.use('/api', bookRoute)
app.use('/api', categoryRoute)
app.use('/api', authorRoute)
app.use('/api', userRoute)

app.listen(3000, err => {
    console.log('Listening on port ', 3000)
})