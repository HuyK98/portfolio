const express = require("express");
const cors = require("cors");
const path = require("path")
const fs = require("fs/promises");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

//kết nối mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error: ", err));

const ContactMessage = require("./models/contact");

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

// api post cho contact form,lưu vào db
app.post("/api/v1/contact", async (req, res, next) => {
    try {
        const { name, email, message } = req.body; //nhận dữ liệu json từ fe bằng req.body nhờ express.json() đã khai báo ở trên
        // validate dữ liệu nhập vào trước khi lưu
        if (!name || !email || !message) {
            return res.status(400).json({ ok: false, error: "Missing name|email|message" });
        }

        //ghi db(tạo doc theo schema)
        const doc = await ContactMessage.create({ name, email, message });

        //trả về id để FE biết lưu bản nào
        res.json({ ok: true, data: { id: doc._id } });
    } catch (err) {
        next(err); //đẩy err cho error handler xử lý
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