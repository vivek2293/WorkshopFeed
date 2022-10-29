const express = require('express')
const router = express.Router()
const {addTask, getTask} = require("../controllers/operation");

router.route("/create").post(addTask);
router.route("/getTask").post(getTask);

module.exports = router;