const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://rkrowchuk:BenefitsPassword@benefitsdb.qdooj.mongodb.net/testDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.listen(9000, function () {
  console.log("Listening on 9000");
});

const TestModel = require("./models/TestDB");

app.post("/", (req, res) => {
  const user = new TestModel({
    userName: "Isaac",
    userEmail: "isaac@fake.com",
    userBirthday: "2012-11-12",
  });
  console.log("req", req);
  console.log("res", res.data);
  user
    .save()
    .then(() => {
      console.log("made it here with user", user);
      res.send("Hello, world!");
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

module.exports = router;
