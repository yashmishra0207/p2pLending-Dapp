const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to p2pLending application." });
});

require("./routes/user.routes.js")(app);

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
