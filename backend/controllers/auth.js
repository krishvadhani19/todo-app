// importing files
const User = require("../models/User");
const catchAsyncError = require("../Utils/catchAsyncError");
const AppError = require("../Utils/appError");

// importing modules
const bcrypt = require("bcryptjs");
const jwtSecret = "KrishVadhani19";
var jwt = require("jsonwebtoken");

exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // find user from the database
  let user = await User.find({ email: email });

  // is user does not exist return error
  if (!user) {
    return next(new AppError("Cant find user", 404));
  }

  // password compare
  const passwordCompare = bcrypt.compare(password, user.password);
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
    data: data,
    authToken: authToken,
  });
});
