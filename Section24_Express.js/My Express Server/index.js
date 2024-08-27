import express from "express";
const app = express();

// listen(port , call back function)

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

app.get("/", (req, res) => {
    res.send("<h1>Hello This is my Home Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +88516914465</p>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About Me</h1><p>My name is Saren Sokmeak, a 3-rd year student, studying web development on UDEMY!</p>"
  );
});