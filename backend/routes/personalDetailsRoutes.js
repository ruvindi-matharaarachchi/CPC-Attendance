const express = require("express");
const router = express.Router();
const PersonalDetails = require("../models/PersonalDetails");

// Create a new entry
router.post("/", async (req, res) => {
  try {
    const newDetails = new PersonalDetails(req.body);
    await newDetails.save();
    res.status(201).json({ message: "Personal details saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all entries
router.get("/", async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
