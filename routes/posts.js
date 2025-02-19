const express = require("express");
const router = express.Router();
const Post = require("../models/post");

const methodOverride = require("method-override");
router.use(methodOverride("_method"));


router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("index", { posts });
});

router.get("/new", (req, res) => {
  res.render("new");
});


router.post("/", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/posts");
});


router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("show", { post });
});


router.get("/:id/edit", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit", { post });
});


router.put("/:id", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, {
    content: req.body.content,
    comments: req.body.comments,
    tag: req.body.tag
  });
  res.redirect(`/posts/${req.params.id}`);
});


router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
});

module.exports = router;
