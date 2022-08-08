const express = require("express");
const {
  getJobHistory,
  createJobRecord,
} = require("../controllers/jobRecordController");
const router = express.Router();

router.get("/", getJobHistory);
// router.get("/", (req, res) => {
//   res.json("at router layer ");
// });

// router.get("/:profile_id", (req, res) => {
//   res.json("at router layer with id");
// });

// router.get("/", (req, res) => {
//   res.json("at router layer");
// });
router.post("/", createJobRecord);

module.exports = router;
