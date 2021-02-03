const router = require('express').Router()
const User = require('../models/user')
const verifyToken = require('../middlewares/verify-token')

const jwt = require('jsonwebtoken')

// Signup rout - post api
router.post('/auth/signup', async(req, res) => {
    console.log("method executed")
    if(!req.body.email || !req.body.password) { //if email or password does not exist
        req.json({
            success: false,
            message: "Please enter email or password"
        })
    } else {
        try {
            let newUser = new User()
            newUser.name= req.body.name
            newUser.email= req.body.email
            newUser.password= req.body.password
            // console.log(newUser)

            await newUser.save() // that Document insert in Modal

            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // = 1 week //[expiresIn]-->after which time that Token become expire
            })

            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user"
            })
        } catch (err) {
            res.status(500).json({
                success:false,
                message: err.message
            })
        }
    }
})

// Profile route - get api
router.get("/auth/user", verifyToken, async (req, res) => { // Does this user login in system? mach with Token
    try {
        let foundUser= await User.findOne({_id: req.decoded._id})
        if(foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }

    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

// login route - post api
router.post("/auth/login", async (req, res) => {
    try {
        let foundUser = await User.findOne({email: req.body.email})
        if(!foundUser) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            })
        } else {
            if(foundUser.comparePassword(req.body.password)) {
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
                    message: "Authentication failed, Wrong password"
                })
            }
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})


// Profile route - get api
router.get("/auth/user", verifyToken, async (req, res) => {
    try {
        let foundUser = await User.findOne({_id: req.decoded._id})
        if(foundUser) {
            res.json({
                success: true,
                user: foundUser
            })
        }
    } catch (err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

module.exports= router;