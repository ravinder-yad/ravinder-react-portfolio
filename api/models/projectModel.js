const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        tech: {
            type: [String],
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        github: {
            type: String,
            default: "#",
        },
        image: {
            type: String,
            required: true, // image url
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Project", projectSchema);
