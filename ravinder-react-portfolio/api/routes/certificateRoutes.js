const express = require("express");
const {
    saveCertificates,
    getCertificates,
} = require("../controllers/certificateController");

const router = express.Router();

router.post("/certificates", saveCertificates);
router.get("/certificates", getCertificates);

module.exports = router;
