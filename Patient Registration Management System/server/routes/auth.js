

const router = require('express').Router()
const User = require('../models/user')
const verifyToken = require('../middlewares/verify-token')

const jwt = require('jsonwebtoken')

// Signup rout - post api
router.post('/auth/signup', async (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "Please enter email or passord"
        })
    } else {
        try {

            let newUser = new User()
            newUser.Name = req.body.Name
            newUser.LastName = req.body.LastName
            newUser.Phone = req.body.Phone
            newUser.Field = req.body.Field
            newUser.Email = req.body.Email
            newUser.Password = req.body.Password
            newUser.Gender = req.body.Gender
            newUser.Photo = req.body.Photo

            await newUser.save()

            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // 1 week
            })

            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user"
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
})



// login route - post api
router.post("/auth/login", async (req, res) => {
    try {
        let foundUser = await User.findOne({Email: req.body.Email})
        if(!foundUser) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            })
        } else {
            if(foundUser.comparePassword(req.body.Password)) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 // 1 week
                })

                res.json({
                    success: true,
                    token: token
                })
            } else {
               res.status(403).json({
                   success: false,
                   message: "Acuthentication failed, Wrong password"
               }) 
            }
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;