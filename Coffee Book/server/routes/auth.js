const router = require ('express').Router()
const adminUser = require('../models/adminUser')
const verifyToken = require('../middlewares/verify-token')
const jwt = require('jsonwebtoken')


//sign up rout - post api
router.post('/auth/signup', async(req, res) =>{
    if(!req.body.email || !req.body.password) {
        res.json({
            success: false,
            message: "please enter email or password"
        })

    }else {
        try {
            let newUser = new adminUser()
            newUser.name = req.body.name
            newUser.email = req.body.email
            newUser.password =req.body.password
            await newUser.save()

            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
               expiresIn: 604800  //1 week
            })
            res.json({
                success: true,
                token: token,
                message: "Successfuly created a new user"
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message
            })
            
        }
    }
})

// profile route - get api
router.get("/auth/newUser", verifyToken, async (req, res)=>{
    try {
        let foundUser = await adminUser.findOne({_id: req.decoded._id})
        if(foundUser){
            res.json({
                success: true,
                user: foundUser
            })
        }  
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
        
    }
})

//profile update - put api
router.put("/auth/user", verifyToken, async (req, res) =>{
   try {
    let foundUser = await adminUser.findOne({_id: req.decoded._id})

    if(foundUser){
        if(req.body.name) foundUser.name = req.body.name;
        if(req.body.email) foundUser.email = req.body.email;
        if(req.body.password) foundUser.password = req.body.password;

        await foundUser.save()

        res.json({
            success: true,
            message:"successfully updated"
        })
    }
       
   } catch (err) {
    res.status(500).json({
        success: false,
        message: err.message
    })
    
}
})

//login route - post api
router.post("/auth/login", async(req, res) =>{
    try {
        let foundUser = await adminUser.findOne({email: req.body.email})
        if(!foundUser) {
            res.status(403).json({
                success: false,
                message:" Authentication faild, User not found"
            })
        }else {
            if(foundUser.comparePassword(req.body.password)) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 // 1 week
                })

                res.json({
                    success: true,
                    token: token
                })
            
            }else {
                res.status(403).json({
                    success: false,
                    message: "Authentication faild, wrong password"
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