import { Model, ModelCtor, Sequelize } from "sequelize";
import { dbConfig } from "../config/db.config";
import { User } from "./user.model";

interface dbDto {
  sequelize: Sequelize;
  users: ModelCtor<Model>;
}

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: { ...dbConfig.pool },
});

const db: dbDto = {
  sequelize: sequelize,
  users: User(sequelize),
};

export default db;
