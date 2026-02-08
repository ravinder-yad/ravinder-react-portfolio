const mongoose = require("mongoose");

const iconSchema = new mongoose.Schema({
  name: String,
  icon: String, // frontend mapping ke liye (FaHtml5 etc.)
});

const infoSchema = new mongoose.Schema({
  title: String,
  stage: String,
  desc: String,
  icons: [iconSchema],
});

const sectionSchema = new mongoose.Schema({
  title: String,
  heading: String,
  subheading: String,
  info: [infoSchema],
});

const aboutSchema = new mongoose.Schema(
  {
    sections: [sectionSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("About", aboutSchema);
