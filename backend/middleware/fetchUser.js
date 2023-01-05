// importing files
const AppError = require("../Utils/appError");

// importing modules
var jwt = require("jsonwebtoken");
const jwtSecret = "KrishVadhani19";

const fetchUser = (req, res, next) => {
  let token;

  //
  console.log("fetch user chalu hai");

  // verifying that a valid token is used or not
  if (req.headers.authtoken && req.headers.authtoken.startsWith("Bearer")) {
    token = req.headers.authtoken.split(" ")[1];
  }

  // verifying the jwt token
  const data = jwt.verify(token, jwtSecret);
  if (!data) {
    return next(new AppError("Invalid token!", 498));
  }

  // assigning the data to request
  req.user = data.user;

  // next middleware
  next();
};

module.exports = fetchUser;
