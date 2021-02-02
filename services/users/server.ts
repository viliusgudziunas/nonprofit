import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import db from "./app/models";
import { usersRouter } from "./app/routes/user.routes";

const app = express();

const corsOptions = { origin: "http://loclahost:8081" };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();
// May need this while in development
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

usersRouter(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
