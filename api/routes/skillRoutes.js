const express = require("express");
const { saveSkills, getSkills } = require("../controllers/skillController");

const router = express.Router();

router.post("/skills", saveSkills);
router.get("/skills", getSkills);

module.exports = router;
