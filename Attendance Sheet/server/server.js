const express=require('express');
const morgan=require('morgan');
const bodyporser=require('body-parser');
const Mongoose=require('mongoose');
const dotenv=require('dotenv')
const multer=require('multer')
const cors=require('cors')

// const A=require('./modals/admin')
// const S=require('./modals/student')




dotenv.config()
const app=express();


const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../admin/static/images")

    },
    filename:(req,file,cb)=>{
        cb(null, new Date().toISOString().replace(/:/g,'-') + "-" + file.originalname)
        cb(null,file.originalname)
    }
})
app.use(multer({storage:fileStorage}).single('photo'))

Mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true,useUnifiedTopology: true  },err=>{
    if(err){
        console.log(err);
    }else{
        console.log('connect to database');
    }
})

app.use(cors())
app.use(morgan('dev'))
app.use(bodyporser.json())
app.use(bodyporser.urlencoded({extended:false}))

//get
app.get('/',(req,res)=>{
    res.json('hello world');
})
/*
app.post('/',(req,res)=>{
    const a=new A()
    a.name=req.body.name
    a.lname=req.body.lname
    a.email=req.body.email
    a.password=req.body.password
    a.phoneNumber=req.body.phoneNumber
    a.save(err =>{
        if(err){
            res.json(err);
        }else{
            res.json('successfully saved');
        }
    })
})


app.post('/',(req,res)=>{
    const a=new S()
   
    a.name=req.body.name
    a.lname=req.body.lname
    a.id=req.body.id
    a.save(err =>{
        if(err){
            res.json(err);
        }else{
            res.json('successfully saved');
        }
    })
})
*/
//require api

const userRoute = require('./routes/auth')
app.use('/api', userRoute)
/*
const userRoute=require('./routes/user')
app.use('/api',userRoute);
*/
const studentRoute=require('./routes/student')
app.use('/api',studentRoute);

const classtRoute=require('./routes/class')
app.use('/api',classtRoute);





app.listen(3000,err=>{
    console.log('listenin on part',3000);
})