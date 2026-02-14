const express = require("express");
const router = express.Router();

/* 🔥 NAME MUST MATCH EXPORT */
const {
    saveResume,
    getResume,
} = require("../controllers/resumeController");

router.post("/resume", saveResume);
router.get("/resume", getResume);

module.exports = router;
