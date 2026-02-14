const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    profile: {
        name: { type: String, required: true },
        email: String,
        phone: String,
        address: String,
        summary: String,
        avatar: String,
        socials: [
            {
                network: String,
                username: String,
                url: String,
            }
        ]
    },
    experience: [
        {
            title: String,
            company: String,
            date: String,
            description: String,
        }
    ],
    education: [
        {
            institution: String,
            degree: String,
            date: String,
            description: String,
        }
    ],
    skills: [
        {
            name: String,
            level: String, // e.g. "Expert", "Beginner" or percentage
        }
    ],
    certifications: [mongoose.Schema.Types.Mixed],
    languages: [
        {
            name: String,
            proficiency: String
        }
    ]
}, { timestamps: true, strict: false });

module.exports = mongoose.model("Resume", resumeSchema);
