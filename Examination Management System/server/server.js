const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
const User=require('./models/user')
const cors = require('cors')


dotenv.config()

const app=express()

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

app.get('/',(req,res)=>{
    res.json('hello world')
})

// require api
const teacherRout = require('./routes/teacher')
app.use('/api',teacherRout)
const studentRout = require('./routes/student')
app.use('/api',studentRout)
const examRout = require('./routes/exam')
app.use('/api',examRout)
// const userRout =require('./routes/auth')
// app.use('/api',userRout)

app.listen(3000,err=>{
    console.log('listening on port',3000)
})