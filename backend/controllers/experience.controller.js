const Skill = require("../models/experience");

exports.list = async (req, res) => {
    const data = await Skill.find({}).sort("-createdAt").lean();
    res.json({ ok: true, data });
}

