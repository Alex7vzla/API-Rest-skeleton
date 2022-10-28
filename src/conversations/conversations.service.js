const conversationsController = require('./conversations.controller');

const getAllConversations = async (req, res) => {
conversationsController.getAllConversations()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
};

const getConversationById = async (req, res) => {
    const id = req.params.id;
    conversationsController.getConversationById(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};

const createdConversation = async (req, res) => {
    const {content} = req.body;
    if(content){
        conversationsController.postConversation({
            content
        })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
    }else{
        res.status(400).json({
            message: "Do not send a void message",
            fields: {
            content: "Ex: lorem ipsum"
            },
        });
    }
};

const deleteConversation = (req, res) => {
    const id = req.params.id;
    conversationsController.deleteConversation(id)
    .then((data) => {
        if (data) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: "Invalid ID" });
        }
    })
    .catch((err) => {
        res.status(400).json({ message: err.message });
    s});
};

module.exports = {
    getAllConversations,
    getConversationById,
    createdConversation,
    deleteConversation
}