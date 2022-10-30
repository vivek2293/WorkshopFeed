const express = require('express')
const router = express.Router()
const {addTask, getTask, updateTask, getTaskId} = require("../controllers/operation");

router.route("/create").post(addTask);
router.route("/getTask").post(getTask);
router.route("/update").patch(updateTask);
router.route("/getTask/id").post(getTaskId);

module.exports = router;