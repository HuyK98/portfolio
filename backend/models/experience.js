const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    company: { type: String, trim: true },
    title: { type: String, trim: true },
    time: { type: String, trim: true },
    points: { type: [String], default: [] }
});

module.exports = mongoose.model("Experience", experienceSchema);