const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()

const isUserAuthorized = (req,res,next) => {
    let jwtPayload = req.headers.authorization.split(' ')[1]
    jwt.verify(jwtPayload,process.env.SECRET_KEY,(err,decoded)=> {
        if(decoded && decoded.id === req.params.id) {
            return next()
        } else {
            return next({
                status:401,
                message: "Unauthorized!"
            })
        }
    })
}

module.exports = isUserAuthorized
