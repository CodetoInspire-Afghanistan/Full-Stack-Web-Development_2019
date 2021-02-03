const router = require('express').Router()
const User = require('../models/user')

// post request - insert an owner
router.post('/users', async (req, res) => {
    try {
        const user = new User()
        
        user.name = req.body.name
        user.lastName = req.body.lastName
        user.email = req.body.email
        user.password = req.body.password


        await user.save()

        res.json({
            status: true,
            message: "new User Successfully saved."
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all owners
router.get('/users', async (req, res) => {
    try {
        let users = await user.find()
        res.json({
            status: true,
            user: users
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router