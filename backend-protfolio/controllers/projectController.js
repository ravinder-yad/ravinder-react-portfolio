const Project = require("../models/projectModel");

// SAVE / UPDATE PROJECTS (portfolio style – overwrite)
const saveProjects = async (req, res) => {
    try {
        const { projects } = req.body;

        if (!projects || !Array.isArray(projects)) {
            return res.status(400).json({
                message: "Projects array is required",
            });
        }

        // old projects remove
        await Project.deleteMany();

        const savedProjects = await Project.insertMany(projects);

        res.status(201).json({
            message: "Projects saved successfully ✅",
            data: savedProjects,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// GET PROJECTS
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { saveProjects, getProjects };
