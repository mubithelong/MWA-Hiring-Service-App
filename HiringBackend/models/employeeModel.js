const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  jobName: {},
  employeeProfile: {
    name: String,
    email: String,
    address: { street: String, zip: String, city: String, country: String },
  },

  hourlyRate: Number,
  experience: Number,
});
module.exports = mongoose.model("Employee", Schema);
