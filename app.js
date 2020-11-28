const express = require("express");

const app = express();

const PORT = process.env.PORT || 1212;

app.listen(PORT, () => {
  console.log("App is running at ", PORT);
});
