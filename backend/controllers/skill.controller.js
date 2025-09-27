const Skill = require("../models/skillGroup");

// list(lay ds)
exports.list = async(req, res) => {
    const data = await Skill.find({}).sort("title").lean();
    res.json({ ok: true, data });
}