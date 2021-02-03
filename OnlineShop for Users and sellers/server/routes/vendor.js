const router = require('express').Router()
const Vendor = require('../models/vendor')

// post request - insert an owner
router.post('/vendors', async (req, res) => {
    try {
        const vendor = new Vendor()
        
        vendor.name = req.body.name
        vendor.lastName = req.body.lastName
        vendor.about = req.body.about

        await vendor.save()

        res.json({
            status: true,
            message: "new vendor Successfully saved."
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all owners
router.get('/vendors', async (req, res) => {
    try {
        let vendors = await Vendor.find()
        res.json({
            status: true,
            vendor: vendors
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router