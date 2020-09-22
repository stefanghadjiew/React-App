const express = require("express")
const router = express.Router({mergeParams:true})

const { createMovie,getMovies,deleteMovie } = require("../handlers/movies")
router.route("/").post(createMovie);
router.route("/").get(getMovies);
router.route("/:movie_id").delete(deleteMovie)
module.exports = router;