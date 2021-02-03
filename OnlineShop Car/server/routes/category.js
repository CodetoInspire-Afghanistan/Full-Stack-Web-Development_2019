const router=require('express').Router()
const Category=require('../models/category')


// use async await instade then catch "try and catch"
router.post('/categories',async(req,res)=>{

    try{
     
        const category=new Category()
        category.type=req.body.type;
      
     await category.save()
        res.json({
            status:true,
            message:"successfuly saved new data"
        })

    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }

})



//get request -get all product

router.get('/categories',async(req,res)=>{
    try{
        let categories=await Category.find()
        res.json({
            status:true,
            categories:categories
        })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })
    }
})



module.exports=router