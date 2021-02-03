const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

dotenv.config()

const app=express()

Mongoose.connect(process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true},
    err=>{
    if(err){
        console.log(err)
    }else{
        console.log('Connect to Database')
    }
})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// require api
const productRoute = require('./routes/product')
const categoryRoute = require('./routes/category')
const ownerRoute = require('./routes/owner')
const userRoute = require('./routes/auth')

app.use('/api', productRoute)
app.use('/api', categoryRoute)
app.use('/api', ownerRoute)
app.use('/api',userRoute)

app.listen(3000,err=>{
    console.log('Listening on port',3000)
})