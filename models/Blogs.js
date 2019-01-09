const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  tags: { type: [String], index: true},
  body: String,
  dateCreated: Date
})

mongoose.model('blogs', blogSchema)
