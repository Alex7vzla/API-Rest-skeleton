const uuid = require('uuid');
const Messages = require('../models/messages.models');

const getAllMessages = async (id) => {
    const data = await Messages.findAll({
        where: {
            created_by: id
        }
    });
    return data;
};

const getMessagesById = async (id) => {
    const data = await Messages.findOne({
        where: {
            id: id,
            created_by: id
        }
    })
    return data;
};

const postMessage = async (data) => {
    const newConversation = await Messages.create({
        id: uuid.v4(),
        content: data.content,
        sender_id: data.sender_id,
        conversation_by: data.conversation_by
    })
    return newConversation;
};

module.exports = {
    getAllMessages,
    getMessagesById,
    postMessage,
};