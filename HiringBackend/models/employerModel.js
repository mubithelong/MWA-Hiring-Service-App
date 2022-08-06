const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  Address: {
    street: String,
    city: String,
    zip: String,
  },
});
module.exports = mongoose.model("Employee", Schema);
