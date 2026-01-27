const About = require("../models/aboutmodels");

// CREATE / UPDATE ABOUT DATA
const saveAbout = async (req, res) => {
  try {
    const { sections } = req.body;

    if (!sections) {
      return res.status(400).json({ message: "Sections data required" });
    }

    // single about document (overwrite old)
    await About.deleteMany();

    const about = await About.create({ sections });

    res.status(201).json({
      message: "About data saved successfully ✅",
      data: about,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ABOUT DATA
const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveAbout, getAbout };
