// will have all the routes of backend
const connectToMongo = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");

connectToMongo();
const port = 5000;

app.use(cors());

// to use request body
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
