const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const keys = require("./config/keys");
require("./models/Blogs");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json())

require("./routes/blogRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT)
