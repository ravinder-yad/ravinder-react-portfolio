const Home = require("../models/homemodels");

const createHome = async (req, res) => {
  try {
    const { hero, buttons, image } = req.body;

    if (!hero || !buttons || !image) {
      return res.status(400).json({
        message: "All home data is required",
      });
    }

    const homeData = await Home.create({
      hero,
      buttons,
      image,
    });

    res.status(201).json({
      message: "Home data saved successfully ✅",
      data: homeData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createHome, getHome };
