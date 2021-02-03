const router = require('express').Router()
const User = require('../models/user')

// post
router.post('/users', async (req, res) =>{
     try{
        const user = new User()
        user.ID = req.body.id;
        user.name = req.body.name;
        user.lastName = req.body.lastName;
        // user.phone = req.body.phone;
        // user.email = req.body.email;
        // user.password  = req.body.password;
        // user.age = req.body.age;
        // user.gender = req.body.gender;
        // user.cv = req.body.cv;
        // user.work = req.body.work;
        // user.education = req.body.education;

        await user.save()
        res.json({
            status: true,
            message: "Successfully saved"
        })

     } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })
     }
})
// get
router.get('/users', async (req, res) =>{
    try{
        let users = await User.find()
        res.json({
            status: true,
            users: users
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// get one
router.get('/users/:id', async (req, res) =>{
    try{
        let users = await User.findOne({_id: req.params.id})
        res.json({
            status: true,
            users: users
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// put
router.put('/users/:id', async (req, res) =>{
    try{
        let users = await User.findOneAndUpdate(
            {_id: req.params.id},
            {$set: {
                ID: req.body.ObjectId,
                name: req.body.name,
                lastName: req.body.lastName,
                // phone: req.body.phone,
                // email: req.body.email,
                // password: req.body.password,
                // age: req.body.age,
                // gender: req.body.gender,
                // cv: req.body.cv,
                // work: req.body.work,
                // education: req.body.education
            }},
            {upsert: true}
            )
        res.json({
            status: true,
            updatedUsers: users
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
// delete
router.delete('/users/:id', async (req, res) =>{
    try{
        let users = await User.findOneAndDelete({_id: req.params.id})
        res.json({
            status: true,
            deletedUsers: users
        })
    } catch(err){
        res.status('500').json({
            success: false,
            message: err.message
        })

    }
})
module.exports = router