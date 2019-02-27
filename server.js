const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const pages = require("./backend/routes/pages");
const posts = require("./backend/routes/posts");

mongoose
  .connect(
    "mongodb+srv://rest-shop-901:" +
      process.env.MONGO_ATLAS_PW +
      "@node-rest-api-aulzl.mongodb.net/fall-ng?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", pages);
app.use("/posts", posts);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
