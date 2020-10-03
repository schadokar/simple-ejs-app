const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/logout", (req, res) => {
  res.render("home");
});

module.exports = router;
