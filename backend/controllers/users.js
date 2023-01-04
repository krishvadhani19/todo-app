// importing files
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const AppError = require("../Utils/appError");

// importing modules
var jwt = require("jsonwebtoken");
const catchAsyncError = require("../Utils/catchAsyncError");
const jwtSecret = "KrishVadhani19";

// 1. Create new user
exports.createUser = catchAsyncError(async (req, res, next) => {
  let user = await User.find({ email: req.body.email });
  if (user) {
    return next(new AppError("User already exists!", 500));
  }

  const salt = await bcrypt.genSalt(10);
  const securedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = User.create({
    name: req.body.name,
    email: req.body.email,
    password: securedPassword,
  });

  const data = {
    user: {
      id: req.user.id,
    },
  };
  const authToken = jwt.sign(data, jwtSecret);

  res.status(201).json({
    status: "success",
    data: newUser,
    authToken: authToken,
  });
});

// get user
exports.getUser = catchAsyncError(async (req, res, next) => {
  const userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.status(200).json({
    status: "success",
    data: user,
  });
});
