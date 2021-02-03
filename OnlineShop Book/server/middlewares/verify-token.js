const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    let token = req.headers['x-access-token'] || req.headers["authorization"]

    if(token){
        jwt.verify(token,process.env.SECRET, (err, decoded) =>{
            if(err){
                res.json({
                    success: false,
                    message:"faild  to authenticate"
                })
            }else{
                req.decoded = decoded
                next()
            }

        })
    }else{
        res.json({
            success:false,
            message:"No token Provided"
        })
    }
}