const router = require('express').Router()
const Category = require('../models/category')

// Post(API) request - insert a category
router.post('/categories', async (req, res) => { //[async await] use instade of (then & catch) & also chaning consept
    try {
        // give information from user then insert in the product table
        const category = new Category()
        category.type = req.body.type

        await category.save()

        res.json({
            status: true,
            message: 'new Category Successfully saved'
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// Get(API) request - get all categories
router.get('/categories', async (req, res) => {
    try {
        let categories = await Category.find()
        res.json({
            status: true,
            categories: categories
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router