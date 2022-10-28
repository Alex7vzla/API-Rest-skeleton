const { DataTypes, UUID } = require('sequelize');
const db = require('../utils/database');
const Users = require('./users.models');

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max:30 
        }
    },
    imgUrl: {
        type: DataTypes.STRING,
        field: 'img_url',
        validate: {
            isUrl: true
        }
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Users
        }
    }
});

module.exports = Conversations;