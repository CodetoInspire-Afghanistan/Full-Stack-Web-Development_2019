const router = require('express').Router()

const OrtherReg = require('../models/OrtherReg')



//post request - insert food
 router.post('/OrtherReg', async (req, res)=>{
     try{
         const ortherReg = new OrtherReg()
         ortherReg.catagory = req.body.catagoryID;
         ortherReg.name = req.body.nameID;
         ortherReg.num = req.body.num;
         ortherReg.total = req.body.total;
         ortherReg.Date = req.body.Date;

         await ortherReg.save()

         res.json({
             status: true,
             message: "successfully saved."
         })
     }catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })
     }
 })
// get request - get all food
router.get('/OrtherReg', async(req , res)=>{
    try{
        let ortherReg = await OrtherReg.find()
        res.json({
            status: true,
            ortherReg : ortherReg 
        })
    }catch(err){
res.status('500').json({
    success: false,
    message: err.message
})
    
    }
})
//get request  - get a food by id 

  router.get('/OrtherReg/:id', async(req , res)=>{
    try{
        let ortherReg = await OrtherReg.findone({_id: req.params.id})
        res.json({
            status: true,
            ortherReg: ortherReg
        })
    }catch(err){
res.status('500').json({
    success: false,
    message: err.message
})
    
    }
})

//put request - update a food 

//delet request - delet a food



module.exports = router