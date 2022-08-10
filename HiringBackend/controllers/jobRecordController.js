const JobRecord = require("../models/jobRecordModel");

// find job history by worker id
async function getJobHistory(req, res, next) {
  try {
    console.log("----------------  job recoreds ----------");
    console.log(req.user);
    let email = req.user.user.email;
    const results = await JobRecord.find({
      workerEmail: email,
    });
    console.log(results);
    res.json(results);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// create a job record
async function createJobRecord(req, res, next) {
  try {
    console.log("-----------------");
    console.log(req.body);

    let jobRecord = new JobRecord(req.body);
    const results = await jobRecord.save();

    res.json(results);

    console.log("----------------  creating job recoreds ----------");
    console.log(req.body);

    //let jobRecord = new JobRecord(req.body);
    //let result = await jobRecord.save();
    //res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
}
module.exports = {
  getJobHistory,
  createJobRecord,
};
