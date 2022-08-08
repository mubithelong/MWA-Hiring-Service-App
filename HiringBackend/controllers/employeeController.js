const Employee = require("../models/employeeModel");

// create a work profile
async function addWorkProfile(req, res, next) {
  try {
    console.log(req.body);
    const results = await Employee.create(req.body);

    res.json(results);
  } catch (error) {
    next(error);
  }
}

async function getProfile(req, res, next) {
  try {
    //console.log(req.body);
    console.log(req.user);
    const filter = {};
    const results = await Employee.find(filter);
    console.log(results);
    res.json(results);
  } catch (error) {
    next(error);
  }
}

// get profile(read)
async function getWorkProfile(req, res, next) {
  try {
    const results = await Employee.find({ _id: req.params.profile_id });
    res.json(results);
  } catch (error) {
    next(error);
  }
}

// get all profile
async function getAllProfiles(req, res, next) {
  try {
    console.log("all workers");

    const results = await Employee.find({});
    console.log(results);
    res.json(results);
  } catch (error) {
    next(error);
  }
}

// delete profile

async function deleteWorkProfile(req, res, next) {
  try {
    const results = await Employee.deleteOne({ _id: req.params.profile_id });
    res.json(results);
  } catch (error) {
    next(error);
  }
}

// update work profile

async function updateWorkProfile(req, res, next) {
  try {
    console.log(req.params.profile_id);
    const results = await Employee.updateOne(
      { _id: req.params.profile_id },
      { $set: { ...req.body } }
    );
    console.log(results);
    res.json(results);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getWorkProfile,
  deleteWorkProfile,
  updateWorkProfile,
  addWorkProfile,

  getAllProfiles,

  getProfile,


};
