const express = require("express");
const router = express.Router();

const {
  saveServices,
  getServices,
} = require("../controllers/serviceController");

router.post("/services", saveServices);
router.get("/services", getServices);

module.exports = router;
