import { environment } from "../environment";

const { host, user, password, name } = environment.db;
export const dbConfig = {
  HOST: host,
  USER: user,
  PASSWORD: password,
  DB: name,
  dialect: "postgres" as "postgres",
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
};
