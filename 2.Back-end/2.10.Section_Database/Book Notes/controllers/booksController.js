const pool = require("../db/db");
const axios = require("axios");

// Fetch all books
exports.getAllBooks = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM books ORDER BY date_read DESC"
    );
    res.render("books", { books: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving books");
  }
};

// Fetch a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10); // Make sure to parse the id
    if (isNaN(bookId)) {
      return res.status(400).send("Invalid book ID");
    }

    const result = await pool.query("SELECT * FROM books WHERE id = $1", [
      bookId,
    ]);
    res.render("bookDetail", { book: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving book");
  }
};

// Add a new book
exports.addBook = async (req, res) => {
  const { title, author, rating, review, cover_url, date_read } = req.body;

  try {
    await pool.query(
      "INSERT INTO books (title, author, rating, review, cover_url, date_read) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, rating, review, cover_url, date_read]
    );
    res.redirect("/books");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding book");
  }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10); // Get the book ID from the URL
    const { title, author, rating, review } = req.body; // Get updated data from the form

    // Perform the update query
    await pool.query(
      "UPDATE books SET title = $1, author = $2, rating = $3, review = $4 WHERE id = $5",
      [title, author, rating, review, bookId]
    );

    // Redirect back to the book list after successful update
    res.redirect("/books");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating book");
  }
};

// In booksController.js
exports.editBookForm = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id, 10); // Parse the book ID from the URL
    if (isNaN(bookId)) {
      return res.status(400).send("Invalid book ID");
    }

    const result = await pool.query("SELECT * FROM books WHERE id = $1", [
      bookId,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).send("Book not found");
    }

    const book = result.rows[0];
    res.render("editBook", { book }); // Pass the book object to the view
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving book");
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
  try {
    await pool.query("DELETE FROM books WHERE id = $1", [req.params.id]);
    res.redirect("/books");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting book");
  }
};
