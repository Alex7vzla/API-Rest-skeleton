const Users = require('./users.models')
const Conversations = require('./conversations.models');
const Messages = require('./messages.models');
const Participants = require('./participants.models');

const initModels = () => {
    Users.hasMany(Conversations)
    Conversations.belongsTo(Users)

    Users.hasMany(Participants)
    Participants.belongsTo(Users)

    Users.hasMany(Messages)
    Messages.belongsTo(Users)

    Conversations.hasMany(Participants)
    Participants.belongsTo(Conversations)

    Conversations.hasMany(Messages)
    Messages.belongsTo(Conversations)
};

module.exports = initModels;