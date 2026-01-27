const express = require("express");
const { createHome, getHome } = require("../controllers/homecontrollers");

const router = express.Router();

router.post("/home", createHome);
router.get("/home", getHome);

module.exports = router;
