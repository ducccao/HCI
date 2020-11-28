const express = require("express");
const router = express.Router();
const userCtrl = require("./../controllers/user.controller");

router.get("/api/users", (req, res) => {
  res.end("Hello world!");
});

router.post("/register", userCtrl);

module.exports = router;
