const express = require("express");
const {
  getWorkProfile,
  deleteWorkProfile,
  updateWorkProfile,
  addWorkProfile,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("working");
});
router.get("/:profile_id", getWorkProfile);
router.delete("/:profile_id", deleteWorkProfile);
router.patch("/:profile_id", updateWorkProfile);
router.post("/", addWorkProfile);

module.exports = router;
