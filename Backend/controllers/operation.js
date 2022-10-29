const scheme = require("../models/schema")

const addTask = async(req,res) => {
    const data = req.body;
    const info = await scheme.create(data);
    console.log(info);

    res.status(201).json({"msg":"Task Added"});
}

const getTask = async(req,res) => {
    const data = await scheme.find({});
    console.log(data);
    res.status(200).json(data);
}

module.exports = {addTask, getTask};