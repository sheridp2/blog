const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/Blogs");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json())

require("./routes/blogRoutes")(app);

const port = 8080;
app.listen(port, () => {
  console.log("Localhost " + port);
});
