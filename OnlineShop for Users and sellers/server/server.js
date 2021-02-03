const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user')
const multer = require('multer')
const cors = require('cors')
// npm install cors --save


dotenv.config()

const app = express();

//multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename:(req, file, cb)=>{
        cb(null, new Date().toISOString() + "-" + file.originalname)
    }

})
app.use(multer({storage : fileStorage}).single('image'))

//connection with database

Mongoose.connect(process.env.DATABASE, 
    { useUnifiedTopology: true, useNewUrlParser: true }
     , err =>{
    if(err){
        console.log(err)
    }else{
        console.log('connected to database')
    }
})

//midleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


//require api
const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')
const vendorRoute = require('./routes/vendor')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')



// console.log(productRoute);

app.use('/api', productRoute)
app.use('/api', categoryRoute)
app.use('/api', vendorRoute)
app.use('/api', userRoute)
app.use('/api', authRoute)




app.listen(3000, err =>{
    console.log('listening on port ',3000)
})