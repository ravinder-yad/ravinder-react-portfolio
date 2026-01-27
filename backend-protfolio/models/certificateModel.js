const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        issuer: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: String,
            required: true,
        },
        credential: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true, // image path / url
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Certificate", certificateSchema);
