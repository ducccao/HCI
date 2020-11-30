const express = require("express");
const router = express.Router();
const userCtrl = require("./../controllers/user.controller");

router.get("/api/users", userCtrl.getAllUsers);

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

module.exports = router;
