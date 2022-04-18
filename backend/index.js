const connectToMongo = require("./db");
const express = require("express");
const app = express();

connectToMongo();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Wor");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
