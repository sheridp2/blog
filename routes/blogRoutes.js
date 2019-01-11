const mongoose = require("mongoose");
const Blog = mongoose.model("blogs");

module.exports = app => {
  app.post("/newpost", async (req, res) => {
    const{title, tags, body } = req.body;
    const blog = new Blog({
      title,
      tags,
      body,
      dateCreated: Date.now()
    })
    await blog.save();
    const allBlogs = await Blog.find()
    res.send(allBlogs)

  })
  app.get("/allposts", async (req, res) =>{
    const allBlogs = await Blog.find()
    res.send(allBlogs)
  })

};
