const router = require('express').Router()

const FoodReg = require('../models/FoodReg')



//post request - insert food
 router.post('/FoodReg', async (req, res)=>{
     try{
         const regFood = new FoodReg() 
        //  regFood.catagory = req.body.catagory ;
        regFood.category = req.body.categoryID;
         regFood.name = req.body.name;
         regFood.price = req.body.price;

         console.log(req.body.categoryID)
         console.log(req.body.name)
         console.log(req.body.price)

         await regFood.save()

         res.json({
             status: true,
             message: "successfully saved."
         })
     }catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
     }
 })
// get request - get all food
router.get('/FoodReg', async(req , res)=>{
    try{
        let regfood = await FoodReg.find().sort({$natural: -1}).populate('category')
        res.json({
            status: true,
            regfood : regfood
        })
    }catch(err){
res.status('500').json({
    success: false,   
    message: err.message
})
    
    }
})
//get request  - get a food by id 
router.get('/FoodReg/:id', async(req , res)=>{
    try{
        let regfood = await (await FoodReg.findOne({_id: req.params.id})).populate('category')
        res.json({
            status: true,
            regfood : regfood
        })
    }catch(err){
res.status('500').json({
    success: false,   
    message: err.message
})
    
    }
})



//put request - update a food 
router.put('/FoodReg/:id', async(req , res)=>{
    try{
        let regfood = await FoodReg.findOne(
            {_id: req.params.id},
           {$set:{

            category: req.body.categoryID,
            name: req.body.name,
            price: req.body.price
           }},
           {upsert: true}
           
           )
         
        res.json({
            status: true,
           updatedregfood : regfood
        })
    }catch(err){
res.status('500').json({
    success: false,   
    message: err.message
})
    
    }
})

// delete request - to delete a product
router.delete('/FoodReg/:id', async(req , res)=>{
    try{
        let regfood = await FoodReg.findOneAndDelete(
            {_id: req.params.id})
         
        res.json({
            status: true,
           deletedregfood : regfood
        })
    }catch(err){
res.status('500').json({
    success: false,   
    message: err.message
})
    
    }
})

module.exports = router
