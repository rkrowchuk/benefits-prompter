const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bcrypt = require("bcrypt");
const cors = require("cors");
const saltRounds = 10;

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 100000,
  })
);
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

app.get("/", (req, res) => {
  // console.log("res", res);
  console.log("req.body", req.body);
  res.send("Welcome!");
});

app.get("/new", (req, res) => {
  // console.log("res", res);
  console.log("req.body", req.body);
  res.send("New User!");
});

app.post("/new", (req, res) => {
  console.log("req", req);
  // console.log("res", res);
  const user = new TestModel({
    userName: "Isaac",
    userEmail: "isaac@fake.com",
    userBirthday: "2012-11-12",
  });
  user
    .save()
    .then(() => {
      console.log("req.body", req.body);
      console.log("made it here with user", user);
      res.send("Saved to db");
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

module.exports = router;
