const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")
dotenv.config()

const isUserAuthenticated = (req,res,next) => {
    let jwtPayload = req.headers.authorization.split(" ")[1]
    jwt.verify(jwtPayload,process.env.SECRET_KEY,(err,decoded) =>{
            if (decoded) {
                return next()
            } 
            if (err)
                return next({
                    status: 401,
                    message:"Please log in first!"
            })
        })
    }
   


module.exports = isUserAuthenticated