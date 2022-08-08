const express = require("express");
const {
  getWorkProfile,
  deleteWorkProfile,
  updateWorkProfile,
  addWorkProfile,
  getAllProfiles,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/:profile_id", getWorkProfile);
router.get("/", getAllProfiles);

router.delete("/:profile_id", deleteWorkProfile);
router.patch("/:profile_id", updateWorkProfile);
router.post("/", addWorkProfile);

module.exports = router;
