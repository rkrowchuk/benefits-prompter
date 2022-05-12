const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");

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

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

const TestModel = require("./models/TestDB");


app.get("/", (req, res) => {
    const user = new TestModel({
      userName: "Apricot",
      userEmail: "apricot@fake.com",
      userBirthday: "1990-01-05",
    });
    user.save()
    .then(() => {
      console.log("made it here with user", user);
    }) 
    .catch((err) => {
      console.log("error:", err);
    })
});
  
  module.exports = router;

