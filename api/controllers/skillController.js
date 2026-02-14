const Skill = require("../models/skillModel");

// SAVE / UPDATE SKILLS (overwrite style – portfolio best)
const saveSkills = async (req, res) => {
  try {
    const { categories } = req.body;

    if (!categories || !Array.isArray(categories)) {
      return res.status(400).json({
        message: "Skill categories array is required",
      });
    }

    // Purana data delete (single document approach)
    await Skill.deleteMany();

    const skills = await Skill.create({ categories });

    res.status(201).json({
      message: "Skills data saved successfully ✅",
      data: skills,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET SKILLS
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.findOne();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { saveSkills, getSkills };
