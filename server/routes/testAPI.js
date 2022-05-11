const express = require("express");
const router = express.Router();

/* GET test page. */
router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

module.exports = router;