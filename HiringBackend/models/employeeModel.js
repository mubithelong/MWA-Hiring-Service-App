const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  jobTitle: String,
  hourlyRate: Number,
  experience: Number,
  employeeProfile: {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    address: { street: String, zip: String, city: String },
  },
});
module.exports = mongoose.model("Employee", Schema);
