require("dotenv").config();
const { connectDB } = require("./utils/db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

(async () => {
  await connectDB(process.env.MONGODB_URI);
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
})();
