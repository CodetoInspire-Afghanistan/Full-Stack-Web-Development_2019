const router = require('express').Router()
const Category = require('../modles/category')


//post request - insert category

router.post('/category' , async (req, res) => {
    try {
        // const photo = req.file
        const category = new Category()
        
        category.type = req.body.type

        await category.save()

        res.json({
            status: true,
            message: "Category Added"
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})
// get request - get all categories

router.get('/category', async (req, res) => {
    try {
        let category = await Category.find()
        res.json({
            status: true,
            category: category
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})

// get request - get a category by id
router.get('/category/:id', async (req, res) => {
    try {
        let category = await Category.findOne({_id: req.params.id})
        res.json({
            status: true,
            category: category
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// put request - update category
router.put('/category/:id', async (req, res) => {
    try {
        let updateCategory = await Category.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {
                type: req.body.type
            }},
            {upsert: true}
        )
        res.json({
            status: true,
            updateCategories: updateCategory
        })
    }
    catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})

//delete category
router.delete('/category/:id' , async (req, res) => {
    try {
        let category = await Category.findByIdAndDelete({_id: req.params.id})        
            res.json({
            status: true,
            deletedcategory: category
        })
    } catch (error) {
        res.status('500').json({
            success: false,
            message: error.message
        })
    }
})
module.exports = router