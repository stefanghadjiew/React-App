const express = require("express")
const router = express.Router({mergeParams:true})

const { createMovie,getMovies } = require("../handlers/movies")
router.route("/").post(createMovie);
router.route("/").get(getMovies);
module.exports = router;