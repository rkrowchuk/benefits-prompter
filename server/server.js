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
  res.send("Welcome!");
});

app.get("/register", (req, res) => {
  res.send("New User!");
});

app.post("/register", (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, saltRounds);
  const user = new TestModel({
    userName: req.body.name,
    userEmail: req.body.email,
    userBirthday: req.body.birthdate,
    userPassword: hashedPass,
  });
  TestModel.findOne({ userEmail: req.body.email }, (err, success) => {
    if (success) {
      console.log("There is already a user with this email");
    } else {
      user.save()
      .then(() => {
        console.log("New user was created successfully");
      })
      .catch((err) => {
        console.log("error:", err);
      });
    }
  })
  
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.post("/login", (req, res) => {
  console.log("req", req.body.password);
  TestModel.findOne({ userEmail: req.body.email }, (err, success) => {
    if (
      !success ||
      !bcrypt.compareSync(req.body.password, success.userPassword)
    ) {
      return console.log("Password/email cannot be found");
    } else {
      console.log("Successful login!");
    }
  });
});

module.exports = router;
