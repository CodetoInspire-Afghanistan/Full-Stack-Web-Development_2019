const router=require('express').Router()
const Product=require('../models/product')

//post api - insert all product
router.post('/products',async(req,res)=>{
    try{
        const product=new Product()
        product.category = req.body.categoryID;
        product.owner = req.body.ownerID;
        product.price = req.body.price;
        product.NQuantity = req.body.NQuantity;
        product.date=req.body.date;

        await product.save()

        res.json({
            status:true,
            message:"Successfully saved."
        })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//get api - get all products
router.get('/products',async(req,res)=>{
    try{
       let products=await Product.find().sort({$natural:-1}).populate(['owner','category'])
       res.json({
           status:true,
           products:products
       })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

// get request - get a product by id
router.get('/products/:id',async(req,res)=>{
    try{
       let product=await Product.findOne({_id:req.params.id}).populate(['owner','category'])
       res.json({
           status:true,
           product:product
       })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//put api - update a product
router.put('/products/:id',async(req,res)=>{
    try{
       let product=await Product.findOneAndUpdate(
           {_id:req.params.id},
           {$set:{
            category: req.body.categoryID,
            owner: req.body.ownerID,
            price: req.body.price,
            NQuantity: req.body.NQuantity,
            date:req.body.date
           }},
           {upsert:true}
       )
       res.json({
           status:true,
           updateproduct:product
       })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})

//delete api
router.delete('/products/:id',async(req,res)=>{
    try{
        let product=await Product.findOneAndDelete({_id:req.params.id})
        res.json({
            status:true,
            deletedProduct:product
        })
     }catch(err){
         res.status('500').json({
             success:false,
             message:err.message
         })
     }
})


module.exports=router