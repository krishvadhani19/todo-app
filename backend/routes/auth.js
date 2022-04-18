const express = require("express");
const router = express.Router();
const User = require("../models/User");

// create a new user: POST "/api/auth/"
router.post("/createnewuser", (req, res) => {
  console.log(req.body);
  res.send(req.body);

  const user = User(req.body);
  user.save();
});

module.exports = router;
