const mongoose = require("mongoose")
const User = require("./Users")

const movieSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name : String,
    description : {
        type: String,
        required: true,
        maxlength: 160
    },
    movieImgUrl : String
})

movieSchema.pre("remove",async function(next) {
    try {
        let user = await User.findById(this.user)
        user.movies.remove(this.id);
        await user.save()
        return next()
    } catch(err) {
        return next(err);
    }
})

const Movie = mongoose.model("Movie",movieSchema);

module.exports = Movie;