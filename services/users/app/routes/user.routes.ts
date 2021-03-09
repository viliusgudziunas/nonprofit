import Router from "express";
import users from "../controllers/user.controller";
import { environment } from "../environment";

const router = Router();

router.post("/", users.create);
router.get("/", users.test);

let prefix = "";
if (environment.env === "development") {
  prefix = "/api";
}

export const usersRouter = (app: any) => app.use(`${prefix}/users`, router);
