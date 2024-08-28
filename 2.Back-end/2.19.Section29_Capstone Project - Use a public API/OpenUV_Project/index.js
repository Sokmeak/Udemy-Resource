import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL = "https://api.openuv.io/api/v1/uv?";
const API_KEY = "openuv-3pdra5rm0cinucn-io";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// render home when user request with "/"
app.get("/", (req, res) => {
  res.render("index", { uvData: null, error: null });
});

// var myHeaders = new Headers();
// myHeaders.append("x-access-token", "openuv-3pdra5rm0cinucn-io");
// myHeaders.append("Content-Type", "application/json");

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// fetch(
//   "https://api.openuv.io/api/v1/uv?lat=51.5&lng=-0.11&alt=100&dt",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

var myHeaders = {
  "x-access-token": "openuv-3pdra5rm0cinucn-io",
};
app.post("/get-uv", async (req, res) => {
  // const { lat, lng, alt, dt } = req.body;

  const lat = req.body["lat"];
  console.log("lat: "+lat);
  const lng = req.body.lng;
  const alt = req.body.alt;
  const dt = req.body.dt;

  try {
    const response = await axios.get(
      `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lng}&alt=${alt}&dt=${dt}`,
      {
        headers: myHeaders,
      }
    );

    const uvData = response.data.result;
    console.log(uvData);
    res.render("index", { uvData, error: null });
  } catch (error) {
    res.render("index", {
      uvData: null,
      error: "Error retrieving UV data from API.",
    });
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
