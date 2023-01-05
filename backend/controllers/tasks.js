const Task = require("../models/Tasks");
const catchAsyncError = require("../Utils/catchAsyncError");
const AppError = require("../Utils/appError");

// 1.Get all tasks
exports.getAllTasks = catchAsyncError(async (req, res, next) => {
  // finding the tasks
  const tasks = await Task.find({ user: req.user.id });

  // sending the response message
  res.status(200).json({
    status: "success",
    results: tasks.length,
    data: tasks,
  });
});

// 2.Add Task
exports.addTask = catchAsyncError(async (req, res, next) => {
  // destructuring req.body
  const { title, description } = req.body;

  // creating new task
  const task = await Task.create({
    user: req.user.id,
    title: title,
    description: description,
  });

  console.log(task);

  res.status(201).json({
    status: "success",
    data: task,
  });
});

// 3.Edit Task
exports.editTask = catchAsyncError(async (req, res, next) => {
  const { title, description } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(
    req.user.id,
    {
      title,
      description,
    },
    { new: true }
  );

  if (!updatedTask) {
    return next(new AppError("Data not found!", 404));
  }

  res.status(200).json({
    status: "success",
    data: updatedTask,
  });
});

// 4.Delete Task
exports.deleteTask = catchAsyncError(async (req, res, next) => {
  // find the task
  const deletedTask = await Task.findByIdAndDelete(req.params.id);

  console.log(deletedTask);

  if (!deletedTask) {
    return new AppError("Data not found!", 404);
  }

  res.status(204).json({
    status: "success",
    data: deletedTask,
  });
});
