const express = require("express");
const path = require("path");
const booksRoutes = require("./routes/books");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/books", booksRoutes);

// Root route
app.get("/", (req, res) => {
  res.redirect("/books");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
