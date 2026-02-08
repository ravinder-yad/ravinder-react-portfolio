const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: true, // icon name for react-icons
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);
