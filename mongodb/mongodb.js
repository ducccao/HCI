const mongoose = require("mongoose");

//' "mongodb://127.0.0.1:27017/bluessky";
const MONGO_URL = "mongodb://localhost/HCI";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
