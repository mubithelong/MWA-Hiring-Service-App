const express = require("express");
const {
  getWorkProfile,
  deleteWorkProfile,
  updateWorkProfile,
  addWorkProfile,
<<<<<<< HEAD
  getProfile,
} = require("../controllers/employeeController");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("working");
});
router.get("/profile", getProfile);
=======
  getAllProfile,
} = require("../controllers/employeeController");
const router = express.Router();

>>>>>>> e124ac35008076af731f8df9479eb6d15bfb35b9
router.get("/:profile_id", getWorkProfile);
router.get("/", getAllProfile);

router.delete("/:profile_id", deleteWorkProfile);
router.patch("/:profile_id", updateWorkProfile);
router.post("/", addWorkProfile);

module.exports = router;
