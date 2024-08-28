import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // get the current date
  const d = new Date();

  // get the day of the current date (0-6)
  let day = d.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard and be positive!";

  if (day === 0 || day === 6) {
    type = "a weekendday";
    adv = "it's time to have fun!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}!`);
});
