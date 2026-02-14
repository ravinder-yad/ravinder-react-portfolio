const Service = require("../models/serviceModel");

// ✅ CREATE / SAVE SERVICES
const saveServices = async (req, res) => {
  try {
    const { services } = req.body;

    if (!services || !Array.isArray(services)) {
      return res.status(400).json({
        message: "Services array required",
      });
    }

    await Service.deleteMany();
    const saved = await Service.insertMany(services);

    res.status(201).json({
      message: "Services saved successfully",
      data: saved,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET SERVICES
const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔴 THIS EXPORT IS MUST
module.exports = {
  saveServices,
  getServices,
};
