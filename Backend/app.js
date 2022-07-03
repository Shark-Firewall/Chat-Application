const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
