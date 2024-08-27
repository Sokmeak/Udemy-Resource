import express from "express";
import apiRoute from "./routes/api.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", apiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
