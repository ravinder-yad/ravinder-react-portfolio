const Contact = require("../models/contactmodels");

// SAVE CONTACT MESSAGE
const sendContact = async (req, res) => {
  try {
    const { yourname, email, Connectwith } = req.body;

    if (!yourname || !email || !Connectwith) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const message = await Contact.create({
      yourname,
      email,
      Connectwith,
    });

    res.status(201).json({
      message: "Message sent successfully 💌",
      data: message,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET ALL CONTACT MESSAGES (admin use)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { sendContact, getContacts };
