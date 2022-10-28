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
            if(data){
                res.status(200).json(data);
            }else {
                res.status(404).json({mmessage: "Invalid ID"})
            }
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
};

const createdConversation = async (req, res) => {
    
    const {title, imageUrl} = req.body;
    const userId = req.user.id;

    if(title && imageUrl){
        conversationsController.postConversation({title, imageUrl, userId})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(404).json({ message: err.message });
        });
    }else{
        res.status(400).json({
            message: "Missing data",
            fields: {
                title: "string",
                imageUrl: "string"
            }
        })
    }
};

const patchConversation = async (req, res) => {
    const id = req.params.id;
    const {title, imgUrl} = req.body;

    conversationsController.updateConversation(id, {title, imgUrl})
        .then(data => {
            if(data[0]){
                res.status(200).json({
                    message: `Conversation with ID: ${id}, edited successfully`
                })
            }else {
                res.status(400).json({message: "Invalid ID"})
            }
        })
        .catch(err => {res.status(400).json({message: err.message})})
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
    patchConversation,
    deleteConversation
}