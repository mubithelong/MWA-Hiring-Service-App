const express = require("express");
const {
  getJobHistory,
  createJobRecord,
} = require("../controllers/jobRecordController");
const router = express.Router();

// get job record

router.get("/job-record", getJobHistory);

// add job record
router.post("/", createJobRecord);

module.exports = router;
