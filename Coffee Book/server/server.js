const express = require("express")
const morgan = require("morgan")
const bodyParser= require("body-parser")
const Mongoose = require("mongoose")
const dotenv = require ('dotenv')
const multer = require('multer')
// const User = require('./models/user')
const cors = require('cors')



dotenv.config()

const app = express()

const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../admin/static/images')
    },
    filename: (req, file, cb)=>{
        cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname)
    }
})


app.use(multer({storage: fileStorage}).single('photo'))

Mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true , useUnifiedTopology: true }, err =>{
    if (err) {
        console.log(err)
    }else{
        console.log("connect to Database")
    }
})
// middleware
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// request api
const bookRoute = require('./routes/books')
const categoryRoute = require('./routes/category')
const userRoute = require('./routes/user')
const amanatRoute = require('./routes/amanatBook')
const adminUserRoute = require('./routes/auth')


app.use('/api', bookRoute)
app.use('/api', categoryRoute)
app.use('/api', userRoute)
app.use('/api', amanatRoute)
app.use('/api', adminUserRoute)


app.listen(3000, err =>{
    console.log('Listening on prot', 3000)
})