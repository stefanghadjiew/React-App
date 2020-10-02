const db = require("../models")
const User = require("../models/Users")
const jwt = require("jsonwebtoken")





exports.signin = async (req,res,next) => {
    try {
        let user = await db.User.findOne({email:req.body.email})
        let { id,username,email } = user
        let isMatch = await user.comparePassword(req.body.password)
        if (isMatch) {
            let token = jwt.sign({
                id,
                username,
                email
            },process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                email,
                token
            })
        } else {
            return next ({
                status:400,
                message: "Incorrect username/password"
            })
        }
       
    } catch(err) {
        return next ({
            status:400,
            message: "Incorrect username/password"
        })
    }
}


exports.register = async (req,res,next) => {
    try {
        let user = await db.User.create(req.body)
        let { id,username,email } = user
        let token = jwt.sign({
            id,
            username,
            email
        },process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            email,
            token
        })
    } catch(err) {
        if (err.code === 11000) {
            err.message ="Sorry,username/email already in use!" 
        }
        
        return next({
            status : 400,
            message : err.message
        });
    }
}

