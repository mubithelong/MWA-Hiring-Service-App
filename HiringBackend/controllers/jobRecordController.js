const Employee = require("../models/jobRecordModel");

// find job history by worker id
async function getJobHistory(req, res, next) {
  try {
    const id = req.params.id;
    console.log("just before the db");
    console.log(id);

    const results = await JobRecord.find({});

    res.json(results);
  } catch (error) {
    next(error);
  }
}

// create a job record
async function createJobRecord(req, res, next) {
  try {
    console.log(req.body);

    const results = await JobRecord.create(req.body);

    res.json(results);
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getJobHistory,
  createJobRecord,
};
