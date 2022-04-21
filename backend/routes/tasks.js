const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { NotBeforeError } = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");
const Task = require("../models/Tasks");

// ROUTE1: fetch all tasks no login required
router.get("/fetchalltasks", fetchUser, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

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
  async (req, res) => {
    const { title, description } = req.body;
    try {
      // if there are errors return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const task = new Task({
        title,
        description,
        user: req.user.id,
      });

      const savedTask = await task.save();
      res.json(savedTask);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
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
  async (req, res) => {
    const { title, description } = req.body;
    try {
      const newTask = {};
      if (title) {
        newTask.title = title;
      }
      if (description) {
        newTask.description = description;
      }

      // find task that has to be updated
      let task = Task.findById(req.params.id);
      if (!task) {
        return res.status(404).send("No such task found!");
      }

      // to check whether the task belongs to the same user
      if (task.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed!");
      }

      task = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// Route4: Delete a Task no login required
router.delete("deletetask/:id", fetchUser, async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    // if task not found
    if (!task) {
      return res.status(404).send("Not Found!");
    }

    // Allow deletion only if user owns this task
    if (task.user !== req.params.id) {
      return res.status(401).send("Not Found!");
    }

    task = await Task.findByIdAndDelete(req.params.id);
    res.json({ Success: "Task has been deleted!", task: task });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!");
  }
});
