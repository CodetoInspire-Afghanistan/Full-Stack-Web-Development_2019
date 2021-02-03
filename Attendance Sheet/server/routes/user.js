const router=require('express').Router()

const User=require('../modals/user')

//post
router.post('/user',async(req,res)=>{
    try{
const image=req.file
const user=new User()
user.class=req.body.classID
user.name=req.body.name
user.lname=req.body.lname
user.email=req.body.email
user.password=req.body.password
user.phoneNumber=req.body.phoneNumber
user.photo=image.path.split('static').pop()

await user.save()
res.json({
    status:true,
    message:"successfuly saved"
})
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

router.get('/user',async(req,res)=>{
    try{
        let user=await User.find().sort({name:1}).populate('class')
        res.json({
            status:true,
            users:user
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})




router.get('/user/:id',async(req,res)=>{
    try{
        let user=await User.findOne({_id:req.params.id}).populate('class')
        res.json({
            status:true,
            users:user
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

router.put('/user/:id',async(req,res)=>{
    try{
        const image=req.file
        let user=await User.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{
                class:req.body.classID,
                name:req.body.name,
                lname:req.body.lname,
                email:req.body.email,
                password:req.body.password,
                phoneNumber:req.body.phoneNumber,
                //photo:image.path.split('static').pop()

            }},
            {upsert:true}
        )
        res.json({
            status:true,
           updateUser:user
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
router.delete('/user/:id',async(req,res)=>{
    try{
        let user=await User.findOneAndDelete(
            {_id:req.params.id}
            
        )
        res.json({
            status:true,
           deleteUser:user
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

module.exports=router;