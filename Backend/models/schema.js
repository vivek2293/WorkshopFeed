const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    date: {
        type: String,
    },
    venue: {
        type: String,
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model("Workshop", workshopSchema);