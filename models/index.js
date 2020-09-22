const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true ,
    useUnifiedTopology: true , 
    useCreateIndex : true 
})

mongoose.Promise = Promise;

module.exports.User = require("./Users")
module.exports.Movie = require("./Movies")