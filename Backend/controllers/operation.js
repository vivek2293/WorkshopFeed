const scheme = require("../models/schema");

const addTask = async (req, res) => {
  const data = req.body;
  const info = await scheme.create(data);
  console.log(info);

  res.status(201).json({ msg: "Task Added" });
};

const getTask = async (req, res) => {
  const data = await scheme.find({});
  console.log(data);
  res.status(200).json(data);
};

const getTaskId = async (req, res) => {
  console.log(req.body);
  const search = { "_id" : req.body._id }
  console.log(search)
  const data = await scheme.find(search);
  console.log(data);
  res.status(200).json(data);
};

const updateTask = async (req, res) => {
  console.log(req.body);
  const update = {
    name: req.body.name,
    type: req.body.type,
    date: req.body.date,
    venue: req.body.venue,
    url: req.body.url,
  };
// const update = {"name":"ok"};
  const filter = { _id: req.body._id };
  console.log(filter);
  console.log(update);
  const doc = await scheme.findOneAndReplace(filter, update);
  console.log(doc);
  res.json({ msg: "ok" });
};

module.exports = { addTask, getTask, updateTask, getTaskId};
