require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;
mongoose.set("strictQuery", true);
module.exports = mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("DB-CONNECTED");
  }
});
