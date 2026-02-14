const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    hero: {
      greeting: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      subtitlePrefix: {
        type: String,
        required: true,
      },
      roles: {
        type: [String],
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },

    buttons: {
      primary: {
        text: {
          type: String,
          required: true,
        },
        route: {
          type: String,
          required: true,
        },
      },
      secondary: {
        text: {
          type: String,
          required: true,
        },
        route: {
          type: String,
          required: true,
        },
      },
    },

    image: {
      src: {
        type: String,
        required: true, 
      },
      alt: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Home", homeSchema);
