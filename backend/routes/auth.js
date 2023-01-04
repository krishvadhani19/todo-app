// importing files
const fetchUser = require("../middleware/fetchUser");
const userController = require("../controllers/users");
const authController = require("../controllers/auth");

// importing files
const express = require("express");
const router = express.Router();

// create a new user: POST "/api/auth/createnewuser" No Login required
router.post("/createnewuser", userController.createUser);

// Route2: Authenticate a User using: POST "/api/auth/login" No Login required
router.post("/login", authController.login);

// route3: Getting login user details Login required
router.get("/getuser", fetchUser, userController.getUser);
module.exports = router;
