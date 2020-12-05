require("dotenv").config();
require("./mongodb/mongodb");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

const userRouter = require("./router/user.router");
const tensorRouter = require("./router/tensor.router");
// middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//tensor model

const tensorModelPath = path.join(__dirname, "/Tensorflow/model.json");

// routes
app.use("/user", userRouter);
app.use("/user", tensorRouter);
//app.use("/static", express.static(path.join(__dirname, tensorModelPath)));

// cors
// cors bugs - allowes get source from another host
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// last guard - barricade
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.json({ msg: "Internal server error!" });
});

// listen
const PORT = process.env.PORT || 1212;
app.listen(PORT, () => {
  console.log("App is running at ", PORT);
});
