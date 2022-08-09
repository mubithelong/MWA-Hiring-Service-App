const JobRecord = require("../models/jobRecordModel");

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
  } catch (error) {
    next(error);
  }
}
module.exports = {
  getJobHistory,
  createJobRecord,
};
