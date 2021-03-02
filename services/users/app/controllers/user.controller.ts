import { Request, Response } from "express";
import db from "../models";

const User = db.users;

const create = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res
      .status(400)
      .send({ ...req.body, message: "Name and Email fields cannot be empty" });
    return;
  }

  const user = { name, email };
  User.create(user)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        ...req.body,
        message: err.message || "An internal server error has occured",
      })
    );
};

const test = (req: Request, res: Response) => {
  res.send({ great: "success" });
};

export default { create, test };
