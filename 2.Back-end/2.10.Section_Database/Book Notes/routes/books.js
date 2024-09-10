const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// GET all books
router.get("/", booksController.getAllBooks);

router.post("/add", booksController.addBook);
router.get("/add", (req, res) => {
  res.render("addBook");
});
// GET a single book by ID
router.get("/:id", booksController.getBookById);

// POST a new book

// Show form to add a new book

// POST to update a book by ID
// In books.js
router.post('/update/:id', booksController.updateBook);

router.get("/update/:id", booksController.editBookForm);

// DELETE a book by ID
router.post("/delete/:id", booksController.deleteBook);

module.exports = router;
