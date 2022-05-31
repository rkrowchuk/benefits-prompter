const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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
  console.log("req.body", req.body);
  // console.log("res", res);
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
