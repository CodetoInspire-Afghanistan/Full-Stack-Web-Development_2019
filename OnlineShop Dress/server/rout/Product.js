const router = require('express').Router()
const Product = require('../modles/product')
const Per_page = 6

router.post('/products' , async (req, res) => {
    try {
        const product = new Product()
        const photo = req.file;
        product.category = req.body.categoryID
        product.title = req.body.title
        product.image = photo.path.split('static').pop();
        product.color = req.body.color
        product.code = req.body.code
        product.price = req.body.price 
        product.size = req.body.size
        product.stockQuantity = req.body.stockQuantity
        
        await product.save()

        res.json({
            status: true,
            message: "successfully Added"
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})
// get request - get all products
router.get('/products', async (req, res) => {
    const page = +req.query.page
    let totalItems
    try {
        let numberProducts = await Product.find().countDocuments()
        let products = await Product.find().skip( (page-1) * Per_page)
        .limit(Per_page).sort({$natural: -1}).populate("category")
        res.json({
            status: true,
            products: products
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})
// get request - get a product by id
router.get('/products/:id', async (req, res) => {
    try {
        let product = await Product.findOne({_id: req.params.id}).populate("category")
        .populate(['category'])
        .populate('rating')
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
// put request - update a product
router.put('/products/:id' , async (req, res) => {
    try {
        const photo = req.file;
        let updateproduct = await Product.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {
                title: req.body.title,
                image: photo.path.split('static').pop(),
                color: req.body.color,
                code: req.body.code,
                price: req.body. price,
                size: req.body.size,
                category:  req.body.categoryID,
                stockQuantity: req.body.stockQuantity
            }},
            {upsert: true}
            )

            res.json({
                status: true,
                updateproducts: updateproduct
            })
        } catch (error) {
            res.status('500').json({
                success: false,
                message: error.message
            })
        }
    })
//delete product
router.delete('/products/:id' , async (req, res) => {
        try {
            let product = await Product.findByIdAndDelete({_id: req.params.id})        
                res.json({
                status: true,
                deleteproducts: product
            })
        } catch (error) {
            res.status('500').json({
                success: false,
                message: error.message
            })
        }
    })
module.exports = router