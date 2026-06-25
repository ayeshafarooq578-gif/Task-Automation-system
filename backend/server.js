const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Automation API Running");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use(
"/api/notifications",
require("./routes/notificationRoutes")
);
// Start cron jobs
require("./cron/reminder");

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});