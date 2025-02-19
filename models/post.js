const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true, trim: true },
  comments: { type: String, required: true, trim: true },
  tag: { type: String }
},{
    timestamps: true
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
