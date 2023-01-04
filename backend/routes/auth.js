const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtSecret = "KrishVadhani19";
var jwt = require("jsonwebtoken");
const User = require("../models/User");
const fetchUser = require("../middleware/fetchUser");
const userController = require("../controllers/users");

// create a new user: POST "/api/auth/createnewuser" No Login required
router.post("/createnewuser", userController.createUser);

// Route2: Authenticate a User using: POST "/api/auth/login" No Login required
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "Password must have atleast 5 charcters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res
          .status(400)
          .json({ success, error: "Sorry no user with this email exist!" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        res.status(400).json({
          success,
          error: "Please try again with correct credentials!",
        });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// route3: Getting login user details Login required

router.get("/getuser", fetchUser, userController.getUser);
module.exports = router;
