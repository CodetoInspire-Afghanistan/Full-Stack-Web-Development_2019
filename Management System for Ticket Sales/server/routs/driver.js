const router =require('express').Router()
const Driver =require('../models/driver')

// post request  - insert driver info
router.post('/drivers',async(req,res)=>{
    try{
        const driver = new Driver()
        driver.name = req.body.name
         driver.lastname=req.body.lastname,
         driver.phone =req.body.phone,
         driver.address =req.body.address,

        

         await driver.save()

         res.json({
            status:true,
            message:"new driver successfully saved!"
         })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }
})

//get request - get all driver info
router.get('/drivers',async(req,res)=>{
    try{
      const driver = await Driver.find()
      res.json({
          status:true,
          drivers:driver
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//get requeat - get a driver info by id
router.get('/drivers/:id',async(req,res)=>{
    try{
      const driver = await Driver.findOne({_id:req.params.id})
      res.json({
          status:true,
          drivers:driver
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// put request - update driver info
router.put('/drivers/:id',async(req,res)=>{
    try{
      const driver = await Driver.findOneAndUpdate(
          {_id:req.params.id},
          {$set:{
            name:req.body.name,
            lastname:req.body.lastname,
            phone:req.body.phone,
            address:req.body.address
            
          }},
          {upsert:true}
          )
      res.json({
          status:true,
          updatedDrivers:driver
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// delete requeat - delete driver info
router.delete('/drivers/:id',async(req,res)=>{
    try{
      const driver = await Driver.findOneAndDelete({_id:req.params.id})
      res.json({
          status:true,
          deletedDrivers:driver
      })
        
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

module.exports =router