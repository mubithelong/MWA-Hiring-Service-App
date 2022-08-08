const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  clientInfo: {
    name: String,
    address: {
      street: String,
      zip: String,
      city: String,
    },
  },
  startDate: Date,
  endDate: Date,
  hourlyRate: Number,
  workerId: String,
});
module.exports = mongoose.model("JobRecord", Schema);
