const mongoose = require("mongoose");

const singleSkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String, // React icon name (FaHtml5, SiMongodb, etc.)
    required: true,
  },
  color: {
    type: String, // hex color
    required: true,
  },
});

const skillCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  skills: [singleSkillSchema],
});

const skillsSchema = new mongoose.Schema(
  {
    categories: [skillCategorySchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Skill", skillsSchema);
