require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/error");

const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình cho đường dẫn chung,các route dùng
app.use("/api/v1", require("./routes"));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
