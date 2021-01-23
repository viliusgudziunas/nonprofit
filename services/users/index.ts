import express from "express";
import bodyParser from "body-parser";
import db from "./queries";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/users", db.getUsers);
app.get("/api/users/:id", db.getUser);
app.post("/api/users", db.createUser);
app.put("/api/users/:id", db.updateUser);
app.delete("/api/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
