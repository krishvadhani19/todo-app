// will have all the routes of backend
const connectToMongo = require("./db");
const app = require("./app");

// Connecting to database
connectToMongo();

// defining the port
const port = 5000;

// starting the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
