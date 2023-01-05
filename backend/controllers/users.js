// importing files
const User = require("../models/User");
// const AppError = require("../Utils/appError");

// importing modules
const catchAsyncError = require("../Utils/catchAsyncError");

// get user
exports.getUser = catchAsyncError(async (req, res, next) => {
  const userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.status(200).json({
    status: "success",
    data: user,
  });
});
