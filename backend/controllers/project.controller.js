const Project = require("../models/project");

// list(lay ds)
exports.list = async (req, res) => {
    const data = await Project.find({}).sort("-createdAt").lean();
    res.json({ ok: true, data });
};

// create(tao moi)
exports.create = async (req, res) => {
    const data = await Project.create(req.body);
    res.status(201).json({ ok: true, data });
};

// update(cap nhat)
exports.update = async (req, res) => {
    const { id } = req.params;
    const data = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ ok: true, data });
};

// remove(xoa)
exports.remove = async (req, res) => {
    const { id } = req.params;
    const data = await Project.findByIdAndDelete(id);
    res.json({ ok: true, message: "Project deleted" });
};
