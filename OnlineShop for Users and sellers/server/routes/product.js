
const router = require('express').Router()
const Product = require('../models/product')

// Post request - insert a product
router.post('/products', async(req, res)=>{
    try{

        // const image = req.file;
        const product = new Product()
        product.title = req.body.title;
        product.category = req.body.categoryId;
        product.vendor = req.body.vendorId;
        product.description = req.body.description;
        product.image = req.body.image;
        product.stockQuantity = req.body.stockQuantity
        product.price = req.body.price

        await product.save()
        res.json({
            status: true,
            message: "Successfully inserted!"
        })
    }catch(err){
        res.status('500').json({
            success:false,
            message : err.message
        })

    }
})

//get request ----get all products
router.get('/products', async(req, res)=>{
    try{

        let products = await Product.find().sort({ $natural: -1 }).populate(['vendor', 'category'])
        res.json({
            status :true,
            products: products
        })

    }catch(err){
        res.status('500').json({
            success:false,
            message : err.message
        })

    }
})

//get request ----get product by id

router.get('/products/:id', async(req, res)=>{
    try{

        let products = await Product.findOne({_id: req.params.id})
        res.json({
            status :true,
            products: products
        })

    }catch(err){
        res.status('500').json({
            success:false,
            message : err.message
        })

    }
})

//put request ---- update products

router.put('/products/:id', async(req, res)=>{
    try{

        let products = await Product.findOneAndUpdate(
            {_id: req.params.id},
                { $set: {
                category: req.body.categoryId,
                vendor: req.body.vendorId,
                title: req.body.title,
                description: req.body.description,
                // image: req.body.image,
                price: req.body.price,
                stockQuantity: req.body.stockQuantity

                }},
                {upsert :true}
            )
            res.json({
            status: true, updatedProduct: product

            })

    }catch(err){
        res.status('500').json({
            success:false,
            message : err.message
        })

    }
})

//delete request ---- delete a product
router.delete('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedProduct: product
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})



module.exports = router;