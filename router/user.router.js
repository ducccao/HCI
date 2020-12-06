const express = require("express");
const router = express.Router();
const userCtrl = require("./../controllers/user.controller");

router.get("/api/users", userCtrl.getAllUsers);

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/guardian", userCtrl.getGuardian);

module.exports = router;
