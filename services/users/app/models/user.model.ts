import { DataTypes, Sequelize } from "sequelize";

const userSchema = {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  subscribed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
};

export const User = (sequalize: Sequelize) => {
  return sequalize.define("user", userSchema);
};
