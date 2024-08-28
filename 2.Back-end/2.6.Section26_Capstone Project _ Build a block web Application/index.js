import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Temporary storage for posts
let posts = [];

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/new", (req, res) => {
  res.render("new-post.ejs");
});

app.post("/new", (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find((post) => post.id === req.params.id);
  res.render("edit-post.ejs", { post: post });
});

app.post("/edit/:id", (req, res) => {
  const postIndex = posts.findIndex((post) => post.id === req.params.id);
  posts[postIndex].title = req.body.title;
  posts[postIndex].content = req.body.content;
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter((post) => post.id !== req.params.id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
