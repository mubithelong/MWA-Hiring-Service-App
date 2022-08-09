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

    console.log("Entering Job Record");
    console.log(req.user);
    const query = {
      x: req.user,
      f: req.body.paymentmethod,
      g: req.body.cardnumber,
    };

    console.log(query);
    const results = await JobRecord.create({ query });

    res.json(results);

    console.log("----------------  creating job recoreds ----------");
    console.log(req.body);

    //let jobRecord = new JobRecord(req.body);
    //let result = await jobRecord.save();
    //res.json(result);

  } catch (error) {
    next(error);
  }
}
module.exports = {
  getJobHistory,
  createJobRecord,
};
