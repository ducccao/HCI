const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  getAllUsers: async (req, res) => {
    const users = await Users.find();
    res.json({
      users,
    });
  },
  register: async (req, res) => {
    try {
      console.log("Registering");
      const { username, password } = req.body;

      //  console.log(req);
      console.log(username, password);

      const user = await Users.findOne({
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

      const newUser = new Users({
        username,
        password: passwordHash,
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
      console.log(er.message);

      return res.status(500).json({
        msg: er.message,
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      console.log("Logining!");
      const user = await Users.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: "User does not exists" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Incorrect password!" });
      }

      const accesstoken = createAccessToken({ id: user._id });

      // req.cookie("accesstoken", accesstoken, {
      //   httpOnly: true,
      //   path: "/user/access_token",
      //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
      // });

      res.json({ msg: "Login Success!", accesstoken });
    } catch (er) {
      console.log(er.message);
      return res.status(500).json({
        msg: er.message,
      });
    }
  },
  getGuardian: async (req, res) => {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({ msg: "Invalid Authentication!" });
    }

    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET || "^PH<qLUsE{3/B6e%",
      (er, user) => {
        if (er) {
          return res.status(400).json({ msg: "Invalid Authentication!" });
        }
        req.user = user;
      }
    );

    try {
      const user = await Users.findById(req.user.id);
      if (!user) return res.status(400).json({ msg: "User does not exists" });

      res.json({ user });
    } catch (er) {
      return res.status(500).json({ msg: er.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET || "^PH<qLUsE{3/B6e%", {
    expiresIn: "1d",
  });
};

module.exports = userCtrl;
