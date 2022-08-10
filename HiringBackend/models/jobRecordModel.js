const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  // exprience: String,
  startdate: Date,
  enddate: Date,
  // jobname: String,

  clientInfo: {
    firstName: String,
    lastName: String,
    email: { type: String },
    address: {
      // street: String,
      // zip: String,
      city: String,
    },
  },
  workerEmail: { type: String },

  hourlyRate: Number,

  // workerId: String,
  paymentmethod: String,
  cardnumber: String,

  // employeeProfile: {
  //   firstName: String,
  //   lasttName: String,
  //   email: { type: String },
  // },
});
module.exports = mongoose.model("JobRecordF", Schema);
