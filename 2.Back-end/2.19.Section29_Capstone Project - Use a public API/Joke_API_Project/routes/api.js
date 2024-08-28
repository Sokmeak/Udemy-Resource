import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { joke: null });
});

router.post("/get-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const joke = response.data;

    // Checking if it's a single-part or two-part joke
    let jokeText = "";
    if (joke.type === "single") {
      jokeText = joke.joke;
    } else {
      jokeText = `${joke.setup} - ${joke.delivery}`;
    }

    res.render("index", { joke: jokeText });
  } catch (error) {
    console.error(error);
    res.render("index", { joke: "Could not fetch joke. Please try again!" });
  }
});

export default router;
