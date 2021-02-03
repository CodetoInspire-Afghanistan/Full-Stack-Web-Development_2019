const router =require('express').Router()
const Teacher =require('../models/teacher')

// post request  - insert driver info
router.post('/teachers',async(req,res)=>{

    try{
        const teacher= new Teacher()
        teacher.name = req.body.name
        teacher.lastname=req.body.lastname,
        teacher.phone =req.body.phone,
        teacher.subject =req.body.subject,

        

         await teacher.save()

         res.json({
            status:true,
            message:"new teacher successfully saved!"
         })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }
})

// get request  - get all students info
router.get('/teachers',async(req,res)=>{
    try{
      const teacher = await Teacher.find()
      res.json({
          status:true,
          teachers:teacher
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// get request  - get one students by id 
router.get('/teachers/:id',async(req,res)=>{
    try{
      const teacher = await Teacher.findOne({_id:req.params.id})
      res.json({
          status:true,
          teachers:teacher
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

router.put('/teachers/:id',async(req,res)=>{
    try{
      const teacher = await Teacher.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            name :req.body.name,
            lastname:req.body.lastname,
            phone:req.body.phone,
            subject:req.body.subject
            
            
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedstTeachers:teacher
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//delete requeat - delete teacher  info
router.delete('/teachers/:id',async(req,res)=>{
    try{
      const teacher = await Teacher.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedteachers:teacher
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

module.exports =router