// importing files
const fetchUser = require("../middleware/fetchUser");
const userController = require("../controllers/users");
// const authController = require("../controllers/auth");

// importing files
const express = require("express");
const router = express.Router();

// Route2: Authenticate a User using: POST "/api/auth/login" No Login required
router.post("/login", userController.login);

// create a new user: POST "/api/auth/createnewuser" No Login required
router.post("/signup", userController.signup);

// route3: Getting login user details Login required
router.get("/getuser", fetchUser, userController.getUser);
module.exports = router;
