const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Tasks = require("../models/Tasks");

// ROUTE1: fetch all tasks no login required
router.get("/getalltasks", fetchUser, async (req, res) => {
  try {
    const tasks = await Tasks.find({ user: req.user.id });
    res.json(tasks);
  } catch {
    console.log(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

// ROUTE2: Addtask

// Route3: Edit a task

// Route4: Delete a Task
router.delete("");
