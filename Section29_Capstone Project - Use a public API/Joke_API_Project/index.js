// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any";

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", (req, res) => {
  res.render("index.ejs", { joke: null });
});

// 5. Use axios to get a random joke and pass it to index.ejs to display.
app.post("/get-joke", async (req, res) => {
  try {
    const result = await axios.get(API_URL);

    // Checking if it's a single-part or two-part joke
    let jokeText = "";
    if (result.data.type === "single") {
      jokeText = result.data.joke;
    } else {
      jokeText = `${result.data.setup} - ${result.data.delivery}`;
    }

    res.render("index.ejs", { joke: jokeText });
  } catch (error) {
    res.status(500).send("Error retrieving joke. Please try again!");
    console.log(error.message);
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
