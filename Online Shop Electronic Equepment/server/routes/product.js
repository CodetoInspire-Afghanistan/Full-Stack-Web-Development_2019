const router = require('express').Router()
const Product = require('../models/product')

//  post request 
router.post('/products', async (req,res)=>{
    try{
        const product =new Product()
        const image = req.file;
        product.photo = image.path.split('static').pop();

        product.title=req.body.title
        product.description=req.body.description
        product.type=req.body.type
        product.code=req.body.code
        product.price=req.body.price

        await product.save()
        res.json({
            status:true,
            message:"successfully saved"
        })
    }catch(err){
        res.status('500').json({
            success:false,
            message:err.message
        })

    }
})
//get request

router.get('/products', async (req,res)=>{
    try{
        let products =await Product.find().sort({$natural : -1})
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
router.get('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOne({_id: req.params.id})
        res.json({
            status: true,
            product: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

//put request
router.put('/products/:id', async (req, res) => {
    try {
        let product = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            {$set:{
                title:req.body.title,
                description:req.body.description,
                type:req.body.type,
                // photo:image.path.split('static').pop(),
                code:req.body.code,
                price:req.body.price    
            }},
            {uperset: true}
            )
        res.json({
            status: true,
            updateProduct: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})
// delete request
router.delete('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deleteProduct: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})


module.exports = router