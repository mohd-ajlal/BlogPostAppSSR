const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts");
const methodOverride = require("method-override");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/blog")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
