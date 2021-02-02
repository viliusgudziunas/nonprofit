import Router from "express";
import users from "../controllers/user.controller";

const router = Router();

router.post("/", users.create);
// router.get("/", users.findAll);

export const usersRouter = (app: any) => app.use("/api/users", router);
