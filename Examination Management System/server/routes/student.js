const router =require('express').Router()
const Student =require('../models/student')

// post request  - insert students info
router.post('/students',async(req,res)=>{

    try{
        const student= new Student()
        student.name = req.body.name,
        student.lastname=req.body.lastname,
        student.phone =req.body.phone,
        student.gender =req.body.gender,
        student.grade =req.body.grade,
    

        

         await student.save()

         res.json({
            status:true,
            message:"new student successfully saved!"
         })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }
})

// get request  - get all students info

router.get('/students',async(req,res)=>{
    try{
      const student = await Student.find()
      res.json({
          status:true,
          students:student
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// get request  - get all students info

router.get('/students/:id',async(req,res)=>{
    try{
      const student = await Student.findOne({_id:req.params.id})
      res.json({
          status:true,
          students:student
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//put request
router.put('/students/:id',async(req,res)=>{
    try{
      const student = await Student.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            name :req.body.name,
            lastname:req.body.lastname,
            phone:req.body.phone,
            gender:req.body.gender,
            grade:req.body.grade,
            
            
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedstudents:student
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//delete requeat - delete atudent info
router.delete('/students/:id',async(req,res)=>{
    try{
      const student = await Student.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedstudents:student
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


module.exports =router