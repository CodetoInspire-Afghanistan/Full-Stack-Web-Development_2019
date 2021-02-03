const router = require('express').Router()
const User = require('../models/user')

// Post request - insert a admin
router.post('/user', async (req, res) => {
    try {
        const user = new User()
        // Models            Postman
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        
    
        await user.save()

        res.json({
            status: true,
            message: "User Successfully"
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

// get request - get all User
router.get('/user', async (req, res) => {
    try{
        let user = await User.find()
        res.json({
            status: true,
            user: user
        })
    } catch(err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router