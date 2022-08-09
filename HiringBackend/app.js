const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const checkToken = require("./middlewares/verify");

const app = express();

// mongoose.connect(
//   "mongodb+srv://yonatan:123Saproject@cluster0.5h8b0tu.mongodb.net/?retryWrites=true&w=majority",

// const checkToken = require("./middlewares/checkToken");
const employeeRouter = require("./routers/employeeRouter");
const jobRecordRouter = require("./routers/jobRecordRouter");
// const employerRouter = require("./routers/employerRouter");
const employerRouter = require("./routers/userRouter");

const url = process.env.MONGO_URL;

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
};

mongoose.connect(
  url,

  { useNewUrlParser: true }
);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/users", require("./routers/authRouter"));

//app.use("/payment", checkToken, jobRecordRouter);

// ------------  employee routes

app.use("/employees", checkToken, employeeRouter);

//-------------- job records routes
app.use("/job-history", checkToken, jobRecordRouter);

app.use((req, res, next) => {
  next(new Error("Route Not Found"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

app.listen(3000, () => console.log("Listening on port 3000"));
