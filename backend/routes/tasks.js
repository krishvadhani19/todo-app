const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const Task = require("../models/Tasks");

// ROUTE1: fetch all tasks no login required
router.get("/fetchalltasks", fetchUser, async (req, res) => {
  try {
    const tasks = await Tasks.find({ user: req.user.id });
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
router.put("/edittask/", fetchUser, [
  body("title", "Title must have atleast 5 characters").isLength({ min: 5 }),
  body("description", "Title must have atleast 5 characters").isLength({ min: 5 }),
], );

// Route4: Delete a Task no login required
router.delete("");
