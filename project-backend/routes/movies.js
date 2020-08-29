const express = require("express")
const router = express.Router({mergeParams:true})

const { createMovie } = require("../handlers/movies")
router.route("/").post(createMovie);

module.exports = router;