// import files
const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/auth");
const AppError = require("./Utils/appError");
const globalErrorHandler = require("./controllers/errors");

// import modules
const express = require("express");
const cors = require("cors");

// creating express app
const app = express();

// cors
app.use(cors());

// to use request body
app.use(express.json());

// Routes Middleware
app.use("/api/auth", userRouter);
app.use("/api/tasks", taskRouter);

// neither of the request match then
app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server.`, 404));
});

// Global error handler to handle all kinds of error at one place
app.use(globalErrorHandler);

module.exports = app;
