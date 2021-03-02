import dotenv from "dotenv";

dotenv.config();

export const environment = {
  env: process.env.ENV,

  host: process.env.HOST,
  port: process.env.PORT,
  cors_port: process.env.CORS_PORT,

  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME || "",
  },
};
