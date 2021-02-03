const router =require('express').Router()
const Exam =require('../models/exam')

// post request  - insert exam info
router.post('/exams',async(req,res)=>{

    try{
        const exam= new Exam()
        exam.subject= req.body.subject,
        exam.room=req.body.room,
        exam.day =req.body.day,
        exam.date =req.body.date,
        exam.time =req.body.time,
        exam.student=req.body.studentID,
        exam.teacher = req.body.teacherID
         await exam.save()

         res.json({
            status:true,
            message:"new taking exam successfully saved!"
         })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }
})

// get  request  - get all request exam info
router.get('/exams',async(req,res)=>{
    try{
      const exam = await Exam.find().populate(['student','teacher'])
      res.json({
          status:true,
          exams:exam
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// get  request  - get  request exam by id
router.get('/exams/:id',async(req,res)=>{
    try{
      const exam = await Exam.findOne({_id:req.params.id})
      res.json({
          status:true,
          exams:exam
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
//put request
router.put('/exams/:id',async(req,res)=>{
    try{
      const exam = await Exam.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            subject :req.body.subject,
            room:req.body.room,
            day:req.body.day,
            date:req.body.date,
            time:req.body.time,
            student:req.body.studentID,
            teacher:req.body.teacherID,
            
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedExams:exam
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//delete requeat - delete exam info
router.delete('/exams/:id',async(req,res)=>{
    try{
      const exam = await Exam.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedexams:exam
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


module.exports =router