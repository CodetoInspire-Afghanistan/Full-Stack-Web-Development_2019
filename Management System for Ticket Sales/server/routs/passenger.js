const router =require('express').Router()
const Passenger =require('../models/passenger')

//post request - insert passenger info
router.post('/passengers',async(req,res)=>{
    try{
        const passenger = new Passenger()
        passenger.name = req.body.name,
        passenger.lastname=req.body.lastname,
        passenger.gender=req.body.gender,
        passenger.passportNumber=req.body.passportNumber,
        passenger.phone =req.body.phone,
        passenger.address =req.body.address,
        passenger.from =req.body.from,
        passenger.regesterdate =req.body.regesterdate,
        passenger.traveldate =req.body.traveldate,
        passenger.driver=req.body.driverID,
        passenger.car=req.body.carID

     await passenger.save()

     res.json({
         status:true,
         message:"New passenger add successfully!"
     })

    }catch(err){
        res.status('500').json({
          success:false,
          message:err.message
        })

    }
})

// get request - get all passenger info
router.get('/passengers',async(req,res)=>{
    try{
      const passenger = await Passenger.find().sort({$natural:-1}).populate(['driver','car'])
      res.json({
          status:true,
          passengers:passenger
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//get request - get a passenger ifo by id
router.get('/passengers/:id',async(req,res)=>{
    try{
      const passenger = await Passenger.findOne({_id:req.params.id})
      res.json({
          status:true,
          passengers:passenger
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// put request - update passenger info
router.put('/passengers/:id',async(req,res)=>{
    try{
      const passenger = await Passenger.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            name:req.body.name,
            lastname:req.body.lastname,
            gender:req.body.gender,
            passportNumber:req.body.passportNumber,
            phone:req.body.phone,
            address:req.body.address,
            from:req.body.from,
            date:req.body.date,
            driver:req.body.driverID,
            car:req.body.carID 
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedPassengers:passenger
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//delete request - delete passenger info
router.delete('/passengers/:id',async(req,res)=>{
    try{
      const passenger = await Passenger.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedPassengers:passenger
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

module.exports = router