const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      console.log("Registering");
      const { username, password } = req.body;

      const user = await Userss.findOne({
        username,
      });

      if (user) {
        return res.status(400).json({ msg: "The username is already exists!" });
      }

      if (password < 6) {
        return res.status(400).json({
          msg: "Password must be at least 6 characters long!",
        });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = (new Users() = {
        username,
        password,
      });

      await newUser.save();

      const accessToken = createAccessToken({
        id: newUser._id,
      });

      res.cookie("accesstoken", accessToken, {
        httpOnly: true,
        path: "/user/access_token",
      });

      res.json({
        msg: "Register success!",
        accessToken,
      });
    } catch (er) {
      return res.status(500).json({
        msg: er.message,
      });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = userCtrl;
