import Pool from "pg";
import { GeneralUtils } from "./helpers";

const pool = new Pool.Pool({
  user: "dev",
  host: "localhost",
  database: "nonprofit_db",
  password: "password",
  port: 5432,
});

// @ts-ignore
export const getUsers = (_request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, result) => {
    if (error) {
      throw error;
    }

    response.status(201).json(result.rows);
  });
};

// @ts-ignore
const getUser = (request, response) => {
  const id = +request.params.id;

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, result) => {
    if (error) {
      throw error;
    }

    response.status(200).json(result.rows);
  });
};

// @ts-ignore
const createUser = (request, response) => {
  const { name, email } = request.body;

  if (
    GeneralUtils.isEmptyNullOrUndefined(name) ||
    GeneralUtils.isEmptyNullOrUndefined(email)
  ) {
    response.status(400).json({ hello: null });
    return;
  }

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    [name, email],
    (error, result) => {
      if (error) {
        throw error;
      }

      // @ts-ignore
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

// @ts-ignore
const updateUser = (request, response) => {
  const id = +request.params.id;
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, _result) => {
      if (error) {
        throw error;
      }

      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

// @ts-ignore
const deleteUser = (request, response) => {
  const id = +request.params.id;

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, _result) => {
    if (error) {
      throw error;
    }

    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

export default { getUsers, getUser, createUser, updateUser, deleteUser };
