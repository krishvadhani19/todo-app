// importing modules
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// importing files
const fetchUser = require("../middleware/fetchUser");
const taskController = require("../controllers/tasks");

// ROUTE1: fetch all tasks no login required
router.get("/fetchalltasks", fetchUser, taskController.getAllTasks);

// ROUTE2: Addtask no login required
router.post(
  "/addtask",
  fetchUser,
  [
    body("title", "Title should have atleast 5 characters").isLength({
      min: 5,
    }),
    body(
      "description",
      "Description should have atleast 5 characters"
    ).isLength({
      min: 5,
    }),
  ],
  taskController.addTask
);

// Route3: Edit a task no login required
router.put(
  "/edittask/:id",
  fetchUser,
  [
    body("title", "Title must have atleast 5 characters").isLength({ min: 5 }),
    body("description", "Title must have atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  taskController.editTask
);

// Route4: Delete a Task no login required
router.delete("/deletetask/:id", fetchUser, taskController.deleteTask);

module.exports = router;
