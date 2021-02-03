const router = require('express').Router()
const User = require('../models/user')


// Post request - insert a user
router.post('/users', async(req, res)=>{
    try {
        const user = new User()
        user.fname = req.body.fname;
        user.category = req.body.category;
        user.amount = req.body.amount;
        user.email = req.body.email;
        user.address = req.body.address;

        console.log(user)


        await user.save()

        res.json({
            status: true,
            message: "new user successfully saved"
        })

    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }

})

// get request - get all users
router.get('/users', async (req, res)=>{
    try {
        let users = await User.find().sort({$natural: -1})
        res.json({
            status: true,
            users: users
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

// get request - get a user by id
router.get('/users/:id', async (req, res)=>{
    try {
        let users = await User.findOne({_id: req.params.id})
        res.json({
            status: true,
            users: users
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})

//put request - update a user
router.put('/users/:id', async (req, res)=>{
    try {
        let users = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                fname : req.body.fname,
                category : req.body.category,
                amount : req.body.amount,
                email : req.body.email,
                address : req.body.address,
            }},
            {upsert: true}
            )

        res.json({
            status: true,
            updatedUsers: users
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


// delete request = delete a user
router.delete('/users/:id', async (req, res)=>{
    try {
        let users = await User.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedUsers: users
        })
        
    } catch (err) {
        res.status('500').json({
            success: false,
            message: err.message
        })
        
        
    }
})


module.exports = router