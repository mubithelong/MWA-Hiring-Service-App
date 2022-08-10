const express = require("express");
const {
  getJobHistory,
  createJobRecord,
} = require("../controllers/jobRecordController");
const router = express.Router();

// get job record

router.get("/job-record", getJobHistory);

//router.post("/pay", createJobRecord);

// add job record
router.post("/", createJobRecord);

module.exports = router;
