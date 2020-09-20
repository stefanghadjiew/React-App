const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/ToWatchList" || "mongodb+srv://cheffo0o:123smokeweed123@cluster0.qus4z.mongodb.net/ToWatchApp?retryWrites=true&w=majority", {
    useNewUrlParser: true ,
    useUnifiedTopology: true , 
    useCreateIndex : true 
})

mongoose.Promise = Promise;

module.exports.User = require("./Users")
module.exports.Movie = require("./Movies")