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
  "mongodb+srv://rkrowchuk:BenefitsPassword@benefitsdb.qdooj.mongodb.net/users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.listen(9000, function () {
  console.log("Listening on 9000");
});

const UserModel = require("./models/UserDB");
const { db } = require("./models/UserDB");

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/register", (req, res) => {
  res.send("New User!");
});

app.post("/register", (req, res) => {
  const hashedPass = bcrypt.hashSync(req.body.password, saltRounds);
  const user = new UserModel({
    userName: req.body.name,
    userEmail: req.body.email,
    userBirthday: req.body.birthdate,
    userPassword: hashedPass,
  });
  UserModel.findOne({ userEmail: req.body.email }, (err, registeredEmail) => {
    if (registeredEmail) {
      console.log("There is already a user with this email");
    } else {
      user
        .save()
        .then(() => {
          console.log("New user was created successfully");
        })
        .catch((err) => {
          console.log("error:", err);
        });
    }
  });
});

app.get("/login", (req, res) => {
  res.send("Login");
});

app.post("/login", (req, res) => {
  console.log("req", req.body.password);
  UserModel.findOne({ userEmail: req.body.email }, (err, success) => {
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

app.get("/planinput", (req, res) => {
  res.send("PlanInput");
});

app.post("/planinput", (req, res) => {
  console.log("req", req.body);
  console.log("req.body[1]", req.body[1]);
  const query = { userEmail: req.body[1] };
  const update = { userPlan: req.body[0] };
  // UserModel.findOne({ userEmail: req.body[1] }, (err, success) => {
  //   if (success) {
  //     return db.success.insertOne({
  //       userEmail: success.userEmail,
  //       userPlan: req.body[0],
  //     });
  //   } else {
  //     console.log(err);
  //   }
  // });

  UserModel.updateOne(query, update);
});

//UserModel.updateOne - no visible error

module.exports = router;
