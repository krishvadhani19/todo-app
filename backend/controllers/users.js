// importing files
const User = require("../models/User");
const AppError = require("../Utils/appError");

// importing modules
const catchAsyncError = require("../Utils/catchAsyncError");

// 1. Create new user
exports.createUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const user = await User.find({ email });
  if (Number.parseInt(user.length) !== 0) {
    return next(new AppError("User already exists!", 500));
  }

  console.log("itna chalu hai");
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

// get user
exports.getUser = catchAsyncError(async (req, res, next) => {
  const userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.status(200).json({
    status: "success",
    data: user,
  });
});
