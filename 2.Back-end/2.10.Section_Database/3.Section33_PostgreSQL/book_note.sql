CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  cover_url TEXT,
  date_read DATE NOT NULL
);
INSERT INTO books (title, author, rating, review, cover_url, date_read) VALUES
('Atomic Habits', 'James Clear', 5, 'Great book on building good habits and breaking bad ones.', 'https://covers.openlibrary.org/b/id/14813724-L.jpg', '2023-01-15'),
('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 4, 'Fascinating take on human history and evolution.', 'https://covers.openlibrary.org/b/id/10281426-L.jpg', '2023-03-10'),
('Deep Work', 'Cal Newport', 4, 'Very insightful on how to work with intense focus.', 'https://covers.openlibrary.org/b/id/10512716-L.jpg', '2023-02-20');


SELECT * 
FROM books;
