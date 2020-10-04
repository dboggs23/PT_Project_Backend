const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.json(), cors());

//app.use(require("../route/login"));

app.all("*", (request, response) => {
  console.log("Returning a 404 from the catch-all route");
  return response.sendStatus(404);
});

// error middleware
//app.use(require("./error-middleware"));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
