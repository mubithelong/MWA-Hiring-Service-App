const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const checkToken = require("./middlewares/checkToken");
const employeeRouter = require("./routers/employeeRouter");
// const employerRouter = require("./routers/employerRouter");

const app = express();
mongoose.connect(
  "mongodb+srv://mubarek:123Saproject@cluster0.5h8b0tu.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/employee", employeeRouter);
// app.use("/employer", employerRouter);

app.use((req, res, next) => {
  next(new Error("Route Not Found"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

app.listen(3000, () => console.log("Listening on port 3000"));
