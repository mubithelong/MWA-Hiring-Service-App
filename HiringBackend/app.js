const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const checkToken = require("./middlewares/verify");

const app = express();

// mongoose.connect(
//   "mongodb+srv://yonatan:123Saproject@cluster0.5h8b0tu.mongodb.net/?retryWrites=true&w=majority",

// const checkToken = require("./middlewares/checkToken");
const employeeRouter = require("./routers/employeeRouter");
const jobRecordRouter = require("./routers/jobRecordRouter");
// const employerRouter = require("./routers/employerRouter");
const employerRouter = require("./routers/userRouter");

mongoose.connect(
  "mongodb+srv://mubarek:123Saproject@cluster0.5h8b0tu.mongodb.net/?retryWrites=true&w=majority",

  { useNewUrlParser: true }
);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/users", require("./routers/authRouter"));

// job record
app.use("/employees/jobRecord/specific", jobRecordRouter);
// app.use("/employees/jobRecord", (req, res) => {
//   res.json("working");
// });
app.use("/employee", employeeRouter);
// app.use("/user", userRouter);

// app.use("/employer", employerRouter);
app.use("", employeeRouter);
app.use((req, res, next) => {
  next(new Error("Route Not Found"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

app.listen(3100, () => console.log("Listening on port 3000"));
