const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    maxLength: [40, "A user name must be at the most 40 characters"],
    minLength: [1, "A user name must be at the least 3 characters"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid email id"],
    required: [true, "A user must have an email"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have password"],
    minLength: [8, "A password must be at the least 8 charcters"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "A user must have confirm password"],
    minLength: [8, "A password must be at the least 8 charcters"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Password does not match to Confirm Password",
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
