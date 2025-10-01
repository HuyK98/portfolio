const Exp = require("../models/experience");

// lay ds(public)
exports.list = async (req, res) => {
    const data = await Exp.find({}).sort("-createdAt").lean();
    res.json({ ok: true, data });
}

// them moi (admin)
exports.create = async (req, res) => {
    const data = await Exp.create(req.body);
    res.json({ ok: true, data });
};

// cap nhat (admin)
exports.update = async (req, res) => {
    const data = await Exp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ ok: true, data });
};

// xoa (admin)
exports.remove = async (req, res) => {
    await Exp.findByIdAndDelete(req.params.id);
    res.json({ ok: true, message: "Experience deleted." });
};


