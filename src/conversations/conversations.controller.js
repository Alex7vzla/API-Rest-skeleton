const uuid = require('uuid');
const Conversations = require('../models/conversations.models');

const getAllConversations = async (id) => {
    const data = await Conversations.findAll({
        where: {
            created_by: id
        }
    });
    return data;
};

const getConversationById = async (id) => {
    const data = await Conversations.findOne({
        where: {
            id: id,
            created_by: id
        }
    })
};

const postConversation = async (data) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        title: data.title,
        img_url: data.img_url,
        created_by: data.created_by
    })
    return newConversation;
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
    deleteConversation
};