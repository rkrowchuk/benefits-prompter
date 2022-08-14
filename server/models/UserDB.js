const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userBirthday: {
    type: Date,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userPlan: [],
});

const UserDB = mongoose.model("users", TestSchema);
module.exports = UserDB;
