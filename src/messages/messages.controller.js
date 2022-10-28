const uuid = require('uuid');
const Messages = require('../models/messages.models');

const getAllMessages = async (conversationId) => {
    const data = await Messages.findAll({
        where: {
            conversationId
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
        senderId: data.senderId,
        conversationId: data.conversationId
    })
    return newConversation;
};

const deleteMessage = async (id) => {
    const data = await Messages.destroy({
        where: {
            id
        }
    })
    return data;
};

module.exports = {
    getAllMessages,
    getMessagesById,
    postMessage,
    deleteMessage
};