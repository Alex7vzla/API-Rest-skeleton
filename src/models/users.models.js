const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER, // +52 
    allowNull: false
  },
  profileImg: {
    type: DataTypes.STRING,
    field: 'profile_img',
    validate: {
      isUrl: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      max: 16
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});

module.exports = Users