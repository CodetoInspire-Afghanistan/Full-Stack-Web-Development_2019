const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const user = require('./models/user')
const cors = require('cors')

dotenv.config()


const app = express()

mongoose.connect(process.env.DATABASE,
     { useNewUrlParser: true, useUnifiedTopology: true },
      err => {
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
app.use(bodyParser.urlencoded({extended : false}))

//require api
const patientRoute = require('./routes/patient')
const userRoute = require('./routes/auth')



app.use('/api', patientRoute)
app.use('/api', userRoute)



app.listen(3000, err =>{
    console.log('listening on port', 3000)
})
