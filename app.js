const express = require("express");

const app = express();
const userRouter = require("./router/user.router");

app.use(userRouter);

const PORT = process.env.PORT || 1212;

app.listen(PORT, () => {
  console.log("App is running at ", PORT);
});
