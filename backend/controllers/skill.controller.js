const Skill = require("../models/skillGroup");

// list(lay ds)
exports.list = async(req, res) => {
    const data = await Skill.find({}).sort("title").lean();
    res.json({ ok: true, data });
};

// create(them moi)
exports.create = async(req, res) => {
    const data = await Skill.create(req.body);
    res.json({ ok: true, data });
};

// update(chinh sua)
exports.update = async(req, res) => {
    const data = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ ok: true, data });
};

// remove(xoa)
exports.remove = async(req, res) => {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ ok: true, message: "Skill deleted." });
};

