const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: { type: String, trim: true },
    items: { type: [String], default: [] },
});

module.exports = mongoose.model("Skill", skillSchema);