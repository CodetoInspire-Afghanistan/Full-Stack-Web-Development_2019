const router=require('express').Router()

const Class=require('../modals/class')

//post
router.post('/class',async(req,res)=>{
    try{
const classes=new Class()
classes.type=req.body.type


await classes.save()
res.json({
    status:true,
    message:"successfuly saved"
})
    }catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


//get
router.get('/class',async(req,res)=>{
    try{
        let classes=await Class.find()
        res.json({
            status:true,
            classes:classes
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//put
router.put('/class/:id',async(req,res)=>{
    try{
        let c=await Class.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{
                name:req.body.name
            }},
            {upsert:true}
        )
        res.json({
            status:true,
           updateClasses:c
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


router.delete('/class/:id',async(req,res)=>{
    try{
        let c=await Class.findOneAndDelete(
            {_id:req.params.id}
            
        )
        res.json({
            status:true,
           deleteClasses:c
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