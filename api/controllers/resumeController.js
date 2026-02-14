const Resume = require("../models/resumeModel");

const saveResume = async (req, res) => {
    try {
        const data = req.body;

        if (!data.profile || !data.profile.name) {
            return res.status(400).json({ message: "Profile data required" });
        }

        // 🔥 NOW THIS WILL WORK
        await Resume.deleteMany();

        const resume = await Resume.create(data);

        res.status(201).json({
            message: "Resume saved successfully ✅",
            data: resume,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const getResume = async (req, res) => {
    try {
        const resume = await Resume.findOne();
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { saveResume, getResume };
