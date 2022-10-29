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
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
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
    type: DataTypes.INTEGER, 
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
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'is_active'
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user"
  },
});

module.exports = Users