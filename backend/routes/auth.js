const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtSecret = "KrishVadhani19";
var jwt = require("jsonwebtoken");

// create a new user: POST "/api/auth/createnewuser" No Login required
router.post(
  "/createnewuser",
  [
    body("name", "Name must be atleast 3 characters").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether a user with this email alrady exists or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry user with this email already exists!" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // creating a new user
      user = User.create({
        name: req.body.name,
        email: secPass,
        password: req.body.password,
      });

      const data = {
        id: user.id,
      };

      const authToken = jwt.sign(data, jwtSecret);
        
      res.json(authToken);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

// Route2: Authenticate a User using: POST "/api/auth/login" No Login required
router.post('/login',[
  body('email','enter a valid email',)
])

module.exports = router;
