const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const TestModel = require("../models/TestDB");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rkrowchuk:BenefitsPassword@benefitsdb.qdooj.mongodb.net/testDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
/* GET home page. */
app.get("/", async (req, res) => {
  const user = new TestModel({
    userName: "Apricot",
    userEmail: "apricot@fake.com",
    userBirthday: "1990-01-05",
  });
  console.log("made it here");
  try {
    await user.save();
  } catch (err) {
    console.log("error:", err);
  }
});

module.exports = router;
