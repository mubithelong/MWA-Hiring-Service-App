const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  jobName: {},
  employeeProfile: {
    name: String,
    email: String,
    address: {},
  },
  hourlyRate: Number,
  experiance: Number,
});
module.exports = mongoose.model("Employee", Schema);
