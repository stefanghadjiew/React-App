const express = require("express");
const router = express.Router();
const { register,signin,getUser } = require("../handlers/authentication")

router.post("/register",register);
router.post("/signin",signin);

module.exports = router;