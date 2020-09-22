const express = require ("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./handlers/error");
const dotenv = require("dotenv");
const authenticationRoutes = require("./routes/auth");
const moviesRoutes = require("./routes/movies");
const isUserAuthenticated = require("./middleware/userAuthentication");
const isUserAuthorized = require("./middleware/userAuthorization");
const PORT = process.env.PORT || 8080;
const path = require('path');
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/auth",authenticationRoutes)
app.use("/api/users/:id/movies",isUserAuthenticated,isUserAuthorized,moviesRoutes)

app.use(express.static('client/build'));
app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.use(errorHandler);

app.use((req,res,next) => {
    let err = new Error("Not Found!")
    err.status = 404;
    next(err);
})

app.listen(PORT,() => {
    console.log(`Server listening on port : ${PORT}`);
})