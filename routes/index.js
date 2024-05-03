var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET error page check */
router.get("/error", function (req, res, next) {
  res.render("error", {
    message: "Error",
    error: { status: 500, stack: "Internal Server Error" },
  });
});

module.exports = router;
