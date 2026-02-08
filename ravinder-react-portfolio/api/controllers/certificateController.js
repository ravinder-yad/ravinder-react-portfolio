const Certificate = require("../models/certificateModel");

// SAVE / UPDATE CERTIFICATES (overwrite – portfolio style)
const saveCertificates = async (req, res) => {
    try {
        const { certificates } = req.body;

        if (!certificates || !Array.isArray(certificates)) {
            return res.status(400).json({
                message: "Certificates array is required",
            });
        }

        // purana data hatao
        await Certificate.deleteMany();

        const saved = await Certificate.insertMany(certificates);

        res.status(201).json({
            message: "Certificates saved successfully ✅",
            data: saved,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// GET CERTIFICATES
const getCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find().sort({ createdAt: -1 });
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { saveCertificates, getCertificates };
