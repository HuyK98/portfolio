const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    period: { type: String, trim: true },
    stack: { type: [String], default: [] },
    repo: { type: String, trim: true },
    demo: { type: String, trim: true },
    highlights: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);