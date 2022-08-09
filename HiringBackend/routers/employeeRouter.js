const express = require("express");
const {
  getWorkProfile,
  deleteWorkProfile,
  updateWorkProfile,
  addWorkProfile,
  getAllProfiles,
  getProfile,
} = require("../controllers/employeeController");
const router = express.Router();

// get/ read work profile
router.get("/", getProfile);

// router.get("/", getWorkProfile);
router.get("/get-all", getAllProfiles);

// delete work profile
router.delete("/", deleteWorkProfile);

// edit
router.patch("/", updateWorkProfile);

// create work profile
router.post("/register", addWorkProfile);

module.exports = router;
