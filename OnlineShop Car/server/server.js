const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
const User=require('./models/user')
const multer=require('multer')
const cors=require('cors')

dotenv.config()

const app=express()

const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../admin/static/images")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
app.use(multer({storage:fileStorage}).single('photo'))


Mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true },err=>{
    if(err){
        console.log(err)
    }else{
        console.log('connect to database')
    }
})
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//require api
const productRoute=require('./routes/product')
const categoryRoute=require('./routes/category')



app.use('/api',productRoute)
app.use('/api',categoryRoute)



app.listen(3000,err=>{
    console.log('listening on port',3000)
})