const express = require('express')
const morgan = require('morgan')
const bodyParser =require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user.js')
const multer = require('multer')
const cors = require('cors')


dotenv.config()
 
const app =express()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../admin/static/images') // create an images folder into admin > static folder
        cb(null, '../client/static/images') // create an images folder into admin > static folder
    },
    filename: (req, file, cb) => {
        cb(null,  file.originalname); // unique name for each image
    }
})


app.use(multer({storage: fileStorage}).single('photo'))
Mongoose.connect(process.env.DATABASE,err=>{
    if(err){
        console.log(err)
    }else{
        console.log('connect to database')
    }
})
//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//require api 
const productRoute =require('./routes/product')
const userRoute =require('./routes/auth')
app.use('/api',productRoute)
app.use('/api',userRoute)

app.listen(3000,err=>{
    console.log('listening on part ',3000)
})