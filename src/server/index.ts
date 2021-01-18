import { weather } from "./weather";
import express from "express";

const app = express();

const fs = require("fs");

app.use(express.json());

app.get("/api/weather", async (req, res) => {
  const query = req.query["q"];
  try {
    const result = await weather(query as string);
    res.send(result);
  } catch (e) {
    res.send(e);
  }
});

app.get("/api/cities", (req, res) => {
  let cities = [];
  const results = [];
  const query = req.query["q"].toString().toLowerCase();

  cities = JSON.parse(fs.readFileSync("./src/server/city_list.json"));

  cities.forEach((city) => {
    if (
      city.name.toLowerCase().includes(query) ||
      city.state.toLowerCase().includes(query) ||
      city.country.toLowerCase().includes(query)
    ) {
      results.push(city);
    }
    if (results.length >= 20) {
      res.json(results);
    }
  });

  res.json(results);
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
