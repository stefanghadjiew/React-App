const db = require("../models")


exports.createMovie = async (req,res,next) => {
    try {
        let movie = await db.Movie.create({
            user : req.params.id,
            name : req.body.name,
            description : req.body.description,
            movieImgUrl : req.body.movieImgUrl
        })
        let foundUser = await db.User.findById(req.params.id)
        foundUser.movies.push(movie);
        await foundUser.save()
        res.status(200).json(movie);
    } catch(err) {
        return next(err);
    }
}



exports.getMovies = async (req,res,next) => {
    try {
        let foundMovies = await db.Movie.find({user:req.params.id})
        res.status(200).json(foundMovies)
    } catch(err) {
        return next(err)
    }
}

exports.deleteMovie = async (req,res,next) => {

}