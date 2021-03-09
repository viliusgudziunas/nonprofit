import { Model, ModelCtor, Options, Sequelize } from "sequelize";
import { dbConfig } from "../config/db.config";
import { environment } from "../environment";
import { User } from "./user.model";

interface dbDto {
  sequelize: Sequelize;
  users: ModelCtor<Model>;
}

const options: Options = {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: { ...dbConfig.pool },
};

if (environment.env === "production") {
  options.dialectOptions = {
    ssl: { require: true, rejectUnauthorized: false },
  };
}

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  options
);

const db: dbDto = { sequelize: sequelize, users: User(sequelize) };

export default db;
