const express =require('express')
const morgan = require('morgan')
const bodyPorser= require('body-parser')
const Mongoose =require('mongoose')
const dotenv =require('dotenv')
const cors = require('cors')


dotenv.config()


const app = express()
Mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,useUnifiedTopology: true },err=>{
    if(err){
        console.log(err)
    }else{
        console.log('Connect to Database')
    }
})
//midleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyPorser.json())
app.use(bodyPorser.urlencoded({extended:false}))



//get
app.get('/',(req,res)=>{
    res.json('Hello Homaira !')
})



// require api
const driverRout =require('./routs/driver')
app.use('/api',driverRout)
 const carRout = require('./routs/car')
 app.use('/api',carRout)
const userRout = require('./routs/auth')
 app.use('/api',userRout)
 const passengerRout =require('./routs/passenger')
app.use('/api',passengerRout)



   
app.listen(3000, err=>{
    console.log('listening on port',3000)
})