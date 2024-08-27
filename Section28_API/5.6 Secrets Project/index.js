// HINTS:
// 1. Import express and axios

import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const API_URL = "https://secrets-api.appbrewery.com/random";
const app = express();
const port = 3000;

// 3. Use the public folder for static files.

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL);

    console.log(result);
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    res.status(404).send(error.message);
    console.log(error.response.data);
  }
});

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
