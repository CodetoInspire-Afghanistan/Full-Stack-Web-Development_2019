const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers["authorization"]

    if(token) {
        jwt.verify(token, process.env.SECRET, (err, decode) =>{
            if(err) {
                res.json({
                    success: false,
                    message: "Failed to authenticate"
                })
            } else {
                req.decode = decode
                next()
            }
        })
    } else {
        res.json({
            success: false,
            message: "No token Provided"
        })
    }



}