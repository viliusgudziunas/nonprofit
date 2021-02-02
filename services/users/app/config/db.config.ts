export const dbConfig = {
  HOST: "localhost",
  USER: "dev",
  PASSWORD: "password",
  DB: "nonprofit_dev",
  dialect: "postgres" as "postgres",
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
};
