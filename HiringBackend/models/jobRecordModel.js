const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  clientInfo: {
    firstName: String,
    lasttName: String,
    email: { type: String, unique: true },
    address: {
      street: String,
      zip: String,
      city: String,
    },
  },
  workerEmail: { type: String, unique: true },
  startdate: Date,
  enddate: Date,
  hourlyRate: Number,

  workerId: String,
  paymentMethod: String,
  cardNumber: String,
});
module.exports = mongoose.model("JobRecord", Schema);
