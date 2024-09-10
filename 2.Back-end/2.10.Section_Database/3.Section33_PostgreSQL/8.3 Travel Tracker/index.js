import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "TestDB",
  password: "sokmeak1376@",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_country");
  let countries = [];

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(countries);

  return countries;
}
// get home page
app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisited();

  console.log(countries);

  res.render("index.ejs", { countries: countries, total: countries.length });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  console.log(input);

  try {
    const result = await db.query(
      "SELECT country_code FROM  countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode);

    try {
      await db.query("INSERT INTO visited_country (country_code) VALUES ($1)", [
        countryCode,
      ]);

      res.redirect("/");
    } catch (err) {
      console.log(err);

      const countries = await checkVisited();

      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try a new one.",
      });
      // insert country code into visited_country table

      /// rerender
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
