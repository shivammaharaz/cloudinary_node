require("dotenv").config();
const user = require("./models/users");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.listen(PORT, () => {
  console.log(`connected to Port: ${PORT}`);
});
