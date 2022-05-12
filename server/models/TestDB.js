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
});

const TestDB = mongoose.model("testDB", TestSchema);
module.exports = TestDB;
