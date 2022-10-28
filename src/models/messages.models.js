const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Conversations = require('./conversations.models');
const Users = require('./users.models');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    },
    senderId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'sender_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'conversation_id',
        references: {
            key: 'id',
            model: Conversations
        }
    }
});

module.exports = Messages;