const router =require('express').Router()
const Car =require('../models/car')

//post request - insert car info
router.post('/cars',async(req,res)=>{
    try{
     const car = new Car()
     car.numberplete = req.body.numberplete,
     car.type =req.body.type 

     await car.save()

     res.json({
         status:true,
         message:"New car add successfully!"
     })

    }catch(err){
        res.status('500').json({
          success:false,
          message:err.message
        })

    }
})
// get request - get all car info
router.get('/cars',async(req,res)=>{
    try{
      const car = await Car.find().sort({ $natural:-1})
      res.json({
          status:true,
          cars:car
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
// get request - get a car by id 
router.get('/cars/:id',async(req,res)=>{
    try{
      const car = await Car.findOne({_id:req.params.id})
      res.json({
          status:true,
          cars:car
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
//put request - update car 
router.put('/cars/:id',async(req,res)=>{
    try{
      const car = await Car.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            numberplete:req.body.numberplete,
            type:req.body.type
            
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedCars:car
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
// delete request delete a car 
router.delete('/cars/:id',async(req,res)=>{
    try{
      const car = await Car.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedCars:car
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})
module.exports =router