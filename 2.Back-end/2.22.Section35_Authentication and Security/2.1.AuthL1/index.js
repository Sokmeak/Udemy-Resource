import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import e from "express";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Security_Base",
  password: "sokmeak1376@",
  port: 5432,
});
db.connect();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    // prevent for already exist email.
    const checkEmail = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkEmail.rowCount > 0) {
      res.send("Email has already exist. Try logging in");
    } else {
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [email, password]
      );
      console.log(result);
      res.render("secrets.ejs");
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  //   const result = await db.query(
  //     "SELECT (email, password)  FROM users WHERE email = $1 AND password = $2",
  //     [email, password]
  //   );

  //   console.log(result.rows);

  //   if (result.rowCount > 0) {
  //     console.log("Login successfully");
  //     res.render("secrets.ejs");
  //   } else {
  //     console.log("Login unsuccessfully");
  //     res.redirect("/");
  //   }

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rowCount > 0) {
      const user = result.rows[0];
      console.log(user);
      const pass = req.body.password;

      const passwordStored = user.password;

      if (pass === passwordStored) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect password!");
      }
    } else {
      res.send("User not found!");
    }
  } catch (error) {
  console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
