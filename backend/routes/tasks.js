// importing modules
const express = require("express");
const router = express.Router();

// importing files
const fetchUser = require("../middleware/fetchUser");
const taskController = require("../controllers/tasks");

// ROUTE1: fetch all tasks no login required
router.get("/getalltasks", fetchUser, taskController.getAllTasks);

// ROUTE2: Addtask no login required
router.post("/addtask", fetchUser, taskController.addTask);

// Route3: Edit a task no login required
router.put("/edittask/:id", fetchUser, taskController.editTask);

// Route4: Delete a Task no login required
router.delete("/deletetask/:id", fetchUser, taskController.deleteTask);

module.exports = router;
