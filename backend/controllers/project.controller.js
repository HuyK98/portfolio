const Project = require("../models/project");

// list(lay ds)
exports.list = async (req, res) => {
    const data = await Project.find({}).sort("-createdAt").lean();
    res.json({ ok: true, data });
}