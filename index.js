const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const keys = require("./config/keys");
require("./models/Blogs");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.json(cors))

require("./routes/blogRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT)
