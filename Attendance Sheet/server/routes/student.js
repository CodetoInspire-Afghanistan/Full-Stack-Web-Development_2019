const router=require('express').Router()

const Student=require('../modals/student')

//post
router.post('/students',async(req,res)=>{

try{  
    const image=req.file     
const student=new Student()
student.class=req.body.classID
student.teacher=req.body.teacherID
student.name=req.body.name
student.lname=req.body.lname
student.id=req.body.id
student.photo=image.path.split('static').pop()


await student.save()
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

router.get('/students',async(req,res)=>{
    try{
        let student=await Student.find().populate('class')
        res.json({
            status:true,
            students:student
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

router.get('/students/:id',async(req,res)=>{
    try{
        let student=await Student.findOne({_id:req.params.id}).populate('class')
        res.json({
            status:true,
            students:student
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})





router.put('/students/:id',async(req,res)=>{
    try{
        const image=req.file
        let s=await Student.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{
                Teacher:req.body.teacherID,
                class:req.body.classID,
                name:req.body.name,
                lname:req.body.lname,
                id:req.body.id,
                photo:image.path.split('static').pop()

                
            }},
            {upsert:true}
        )
        res.json({
            status:true,
           updateClasses:s
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


//attedance
router.put('/attendace/:id',async(req,res)=>{
    try{
        // get,
        router.get(async(req,res)=>{
            try{
                let students=await Student.findOne({_id:req.params.id}).populate('class')
                res.json({
                    status:true,
                    students:students.attend
                })
            }
            catch{
                res.status('500').json({
                    success:false,
                    message:err.message
                })
            }
        })
        
        // attend, x

        
        const attendances = [
            {
              status:req.body.status1,
              date:new Date()
            }
          ]
          
        // x.push(attendances)
         students.push(attendances)
        console.log('ello');
        let s=await Student.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{
           
               
            attend:students,
           date:date
            }},

            {upsert:true},
          
        )
        res.json({
            status:true,
           updateClasses:s
        })
    }
    catch{
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})


//delete
router.delete('/students/:id',async(req,res)=>{
    try{
        let s=await Student.findOneAndDelete(
            {_id:req.params.id}
            
        )
        res.json({
            status:true,
           deleteStudent:s
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