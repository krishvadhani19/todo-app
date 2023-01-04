// will have all the routes of backend
const connectToMongo = require("./db");
const app = require("./app");

connectToMongo();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
