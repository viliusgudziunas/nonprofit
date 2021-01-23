import express from "express";
import bodyParser from "body-parser";
import db from "./queries.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Postgres API" });
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUser);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
