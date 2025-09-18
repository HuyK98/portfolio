const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//1. api health res test connect
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "API connected! " });
});

//2. api trả ds project
app.get("/api/projects", (req, res) => {
    const file = path.join(__dirname, "data", "projects.json");
    const data = JSON.parse(fs.readFileSync(file, "utf-8")); //đọc file dạng text(chuỗi) và parse về dạng mảng object
    res.json(data); //trả mảng cho fe render
});

//chạy server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});