const router = require('express').Router()
const Owner = require('../models/owner')

// Post(API) request - insert a owner
router.post('/owners', async (req, res) => { //[async await] use instade of (then & catch) & also chaning consept
    try {
        // give information from user then insert in the product table
        const owner = new Owner()
        owner.name= req.body.name
        owner.about= req.body.about

        await owner.save()

        res.json({
            status: true,
            message: 'new Owner Successfully saved'
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// Get(API) request - get all Owners
router.get('/owners', async (req, res) => {
    try {
        let owners = await Owner.find()
        res.json({
            status: true,
            owners: owners
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router