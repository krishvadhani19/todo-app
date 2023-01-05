// importing files
const User = require("../models/User");
const catchAsyncError = require("../Utils/catchAsyncError");
const AppError = require("../Utils/appError");

// importing modules
const bcrypt = require("bcryptjs");
const jwtSecret = "KrishVadhani19";
var jwt = require("jsonwebtoken");

// 1. Signup
exports.signup = catchAsyncError(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const user = await User.find({ email });
  if (Number.parseInt(user.length) !== 0) {
    return next(new AppError("User already exists!", 500));
  }

  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
});

// 2. Login
exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // find user from the database
  let user = await User.find({ email: email }).select("+password");

  user = user[0];

  // is user does not exist return error
  if (!user) {
    return next(new AppError("Cant find user", 404));
  }
  // password compare
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    return next(new AppError("Email Id or Password did not match", 401));
  }

  //
  const data = {
    user: {
      id: user.id,
    },
  };
  const authToken = jwt.sign(data, jwtSecret);

  res.status(200).json({
    status: "success",
    data: {
      name: user.name,
      email: user.email,
    },
    authToken: authToken,
  });
});
