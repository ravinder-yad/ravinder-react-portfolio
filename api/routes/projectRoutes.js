const express = require("express");
const {
    saveProjects,
    getProjects,
} = require("../controllers/projectController");

const router = express.Router();

router.post("/projects", saveProjects);
router.get("/projects", getProjects);

module.exports = router;
