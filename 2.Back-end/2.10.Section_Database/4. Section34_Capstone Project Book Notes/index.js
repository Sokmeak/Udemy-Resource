import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Book_note",
  password: "sokmeak1376@",
  port: 5432,
});

db.connect();
let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 5,
    review: "Great book on building good habits and breaking bad ones.",
    cover_url: "https://covers.openlibrary.org/b/id/14813724-L.jpg",
    date_read: "2023-01-15",
  },
];
console.log(books);
app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books");
    console.log(result.rows);
    books = result.rows;
    res.render("books.ejs", { books: books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("An error occurred while fetching books.");
  }
});

app.get("/books", async (req, res) => {
  const sortBy = req.query.sort || "date_read"; // Sort by date, rating, or title
  const result = await db.query(`SELECT * FROM books ORDER BY ${sortBy}`);
  res.render("books", { books: result.rows });
});

app.post("/books", async (req, res) => {
  const { title, author, date_read, rating, review, isbn } = req.body;
  const cover_url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;

  try {
    await db.query(
      "INSERT INTO books (title, author, date_read, rating, review, cover_url) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, date_read, rating, review, cover_url]
    );
    res.redirect("/books");
  } catch (error) {
    console.error("Error adding new book:", error);
    res.status(500).send("Error adding new book.");
  }
});

app.put("/books/:id", async (req, res) => {
  const { title, author, date_read, rating, review } = req.body;
  const { id } = req.params;

  try {
    await db.query(
      "UPDATE books SET title=$1, author=$2, date_read=$3, rating=$4, review=$5 WHERE id=$6",
      [title, author, date_read, rating, review, id]
    );
    res.redirect("/books");
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Error updating book.");
  }
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await db.query("DELETE FROM books WHERE id=$1", [id]);
    res.redirect("/books");
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Error deleting book.");
  }
});
// use for listen to a specific port
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
