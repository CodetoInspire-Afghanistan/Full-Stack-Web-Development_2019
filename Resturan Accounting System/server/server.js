const express=require('express')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const Mongoose=require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
// const RegFood = require('./models/RegFood')
// const RepFood = require('./models/RepFood')
const User =  require('./models/user')

dotenv.config()
const app=express()


Mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true ,useUnifiedTopology: true
},err =>{
    if(err){
      console.log(err)
    }else{
      console.log("connected to Database")
            
        }
    
}) 
app.use(cors() )
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.json('hello world')
})

// app.post('/',(req,res)=>{
//     const user = new User()
//     user.name = req.body.name
//     user.email = req.body.email
//      user.password = req.body.password

//      user.save(err =>{
//          if(err){
//              res.json(err)
//          } else {
//               res.json("succsess saved")
//          }
//      })
// })

const FoodRegrouter = require('./routes/FoodReg')
app.use('/api',FoodRegrouter)


const categoryrouter = require('./routes/category')
app.use('/api',categoryrouter)



const OrtherRegroutar = require('./routes/OrtherReg')
app.use('/api',OrtherRegroutar)

   
const userroutar = require('./routes/auth')
app.use('/api',userroutar)


app.listen(3000,err=>{
    console.log('listening on port',3000)
})