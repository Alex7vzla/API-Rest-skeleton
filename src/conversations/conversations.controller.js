const uuid = require('uuid');
const Conversations = require('../models/conversations.models');

const getAllConversations = async () => {
    const data = await Conversations.findAll()
    return data;
};

const getConversationById = async (id) => {
    const data = await Conversations.findOne({
        where: {
            id
        }
    })
    return data;
};

const postConversation = async (data) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        imgUrl: data.imgUrl,
        userId: data.userId
    })
    return newConversation;
};

const updateConversation = async (id, data) => {
    const data = await Conversations.update(data, {
        where: {
            id
        }
    })
    return data;
};

const deleteConversation = async (id) => {
    const data = await Conversations.destroy({
        where: {
            id
        }
    })
    return data;
};


module.exports = {
    getAllConversations,
    getConversationById,
    postConversation,
    updateConversation,
    deleteConversation
};