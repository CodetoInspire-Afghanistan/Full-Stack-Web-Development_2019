const jwc = require('jsonwebtoken')

module.exports = function(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers["authorization"]// with this 2 proparites give Token from Header & save in token variable
    let checkBearer = "Bearer "

    if(token) {
        if(token.startsWith(checkBearer)) {
            token: token.slice(checkBearer.length, token.length)
        }
        jwc.verify(token, process.env.SECRET, (err, decoded) =>{
            if (err) {
                res.json({
                    success: false,
                    message: "Failed to authenticate"
                })
            }else {
                req.decoded = decoded //decoded containes Document
                //[req.decoded ] we want to register a Vairable then access that in routes
                next()
            }
        })
    }else {
        res.json({
            success: false,
            message: "No token Provided"
        })
    }
}