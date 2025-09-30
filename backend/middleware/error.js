function notFound(req, res) {
    res.status(404).json({ ok:  false, error: "Not Found" });
}

function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message || "Server error" });
}

module.exports = { notFound, errorHandler }