const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("WORKING 🚀 FIXED");
});

module.exports = app;
