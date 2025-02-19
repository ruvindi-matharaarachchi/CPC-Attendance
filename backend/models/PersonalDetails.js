const mongoose = require("mongoose");

const PersonalDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  dateOfJoining: { type: Date, required: true }
});

module.exports = mongoose.model("PersonalDetails", PersonalDetailsSchema);
