const express = require("express");
const dotenv = require("dotenv").config();
const indexRoute = require("./routes/index.js");
const connect = require("./config/database.js");
const authRoute = require("./routes/auth.js");
const taskRoute = require("./routes/tasks.js");
const tasksRoute = require("./routes/allTasks.js");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/user.js");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/", indexRoute);
app.use("/auth", authRoute);
app.use("/task", taskRoute);
app.use("/tasks", tasksRoute);
app.use("/user", userRoute);

app.listen(8080, () => {
  connect();
  console.log("Server is running on port: 8080");
});
