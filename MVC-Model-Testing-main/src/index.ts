import express from "express";
import { json, urlencoded } from "body-parser";
import knex from "./db/knex";
import { Model } from "objection";

Model.knex(knex);

const app = express();
const port = 9000;
app.use(json());

app.listen(port, (): void => {
  console.log(`server ready at http://localhost:${port}`);
});

require("./routes/subcribe.routes")(app);

app.get("/", (_, res) => {
  res.send("Hello World");
});

export default app;
