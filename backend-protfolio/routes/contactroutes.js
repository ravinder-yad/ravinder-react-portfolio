const express = require("express");
const {
    sendContact,
    getContacts,
} = require("../controllers/contactController");

const router = express.Router();

router.post("/contact", sendContact);
router.get("/contact", getContacts);

module.exports = router;
