const express = require("express");
const { saveAbout, getAbout } = require("../controllers/aboutcontroller");

const router = express.Router();

router.post("/about", saveAbout);
router.get("/about", getAbout);

module.exports = router;
