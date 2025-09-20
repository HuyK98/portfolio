const express = require("express");
const cors = require("cors");
const path = require("path")
const fs = require("fs/promises");
const { ok } = require("assert");
const { error } = require("console");

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware cơ bản
app.use(cors()); // fe gọi api từ proxy
app.use(express.json());
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Helper đọc JSON
async function readJSON(filename) {
    const file = path.join(__dirname, "data", filename);
    const raw = await fs.readFile(file, "utf-8");
    return JSON.parse(raw);
}

// api trả ds project
app.get("/api/v1/projects", async (req, res, next) => {
    try {
        const data = await readJSON("projects.json");
        res.json({ ok: true, data });
    } catch (err) {
        next(err);
    }
});

// api trả ds skill
app.get("/api/v1/skills", async (req, res, next) => {
    try {
        const data = await readJSON("skills.json");
        res.json({ ok: true, data })
    } catch (err) {
        next(err);
    }
});

// api trả exp
app.get("/api/v1/exp", async (req, res, next) => {
    try {
        const data = await readJSON("experience.json");
        res.json({ ok: true, data });
    } catch (err) {
        next(err);
    }
})

// error handler
app.use((req, res) => res.status(404).json({ ok: false, error: "Not found!" }));
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ ok: false, error: err.message || "Server error! " });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http"//localhost:${PORT}`);
});