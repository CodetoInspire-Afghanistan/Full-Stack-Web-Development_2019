const router = require('express').Router()
const Category = require('../models/category')

//post request - insert a category
router.post('/categories', async(req, res)=>{
    try {
        const category = new Category()
        category.type = req.body.type

        await category.save()

        res.json({
            status: true,
            message: "new category successfully saved"
        })

    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }

})

//get request- get all categories
router.get('/categories', async (req, res)=>{
    try {
        let categories = await Category.find().sort({$natural: -1})
        res.json({
            status: true,
            categories: categories
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

// get request - get a book by id
router.get('/categories', async (req, res)=>{
    try {
        let categories = await Category.findOne({_id: req.params.id})
        res.json({
            status: true,
            categories: categories
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})
//put request - update a category
router.put('/categories/:id', async (req, res)=>{
    try {
        let categories = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                type: req.body.type
            }},
            {upsert: true}
            )

        res.json({
            status: true,
            updatedcategories: categories
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


//delete request - delete a category
router.delete('/categories/:id', async (req, res)=>{
    try {
        let categories = await Category.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedcategories: categories
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})
module.exports = router