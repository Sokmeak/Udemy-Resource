import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

// to get body of request
app.use(bodyParser.urlencoded({ extended: true }));

// a function handling for checkPassword
function checkPassword(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveYou") {
    userIsAuthorised = true;
  }
  // to continue the respond
  next();
}
// to process the checkPassword Function
app.use(checkPassword);

// request to server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
// to send a peace of data to server
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    // Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
