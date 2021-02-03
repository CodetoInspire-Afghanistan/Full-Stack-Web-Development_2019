const router = require('express').Router()
const Admin = require('../models/admin')
const varifyToken = require('../middlewares/verify-token')
const jwt = require('jsonwebtoken')
 

//sign up
router.post('/auth/signup', async (req, res) =>{
    if(!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "Please enter email or password"
        })
    }else{
        try{
            let newAdmin = new Admin()
            newAdmin.name = req.body.name
            newAdmin.email = req.body.email
            newAdmin.password = req.body.password
            await newAdmin.save()

            let token = jwt.sign(newAdmin.toJSON(), process.env.SECRET, {
                expiresIn: 604000
            })
            res.json({
                success: true,
                token: token,
                message: "Successfully created a new admin"
            })
        }catch (err) {
            res.status(500).json({
                success:false,
                message: err.message
            })
        }
    }
})

// profile
router.get("/auth/adminUser", varifyToken, async (req, res) =>{
    try{
       let foundAdmin = await Admin.findOne({_id: req.decoded._id})
       if(foundAdmin){
           res.json({
               success: true,
               admin : foundAdmin
           })
       }
    } catch (err){
        res.status(500).json({
            success:false,
            message: err.message
        })
    
    }
})

//login
router.post("/auth/login", async (req, res) =>{
    try{
        let foundAdmin = await Admin.findOne({email: req.body.email})
        if(!foundAdmin) {
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            })
        } else {
            if(foundAdmin.comparePassword(req.body.password)) {
                let token = jwt.sign(foundAdmin.toJSON(), process.env.SECRET, {
                    expiresIn: 604800
                })

                res.json({
                    success: true,
                    token: token
                })
            } else {
                res.status(403).json({
                    success: false,
                    message: "Authentication filed, Wrong password"
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
module.exports = router;