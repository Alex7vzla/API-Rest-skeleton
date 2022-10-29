const uuid = require('uuid');
const Users = require('../models/users.models');
const { hashPassword } = require('../utils/crypto');

const getAllUsers = async () => {
    const data = await Users.findAll({
        where: {
            isActive: true
        }
    });
    return data
};

const getUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
            isActive: true
        }
    })
    return data;
};

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        surname: data.surname,
        name: data.name,
        email: data.email,
        password: hashPassword(data.password),
        age: data.age,
        profileImg: data.profileImg,
        phone: data.phone
    })
    return newUser;
};

const updateUser = async (id, data) => {
    const result = await Users.update(data, {
        where: {
            id
        }
    })
    return result;
};

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id
        }
    })
    return data
}

//-----------------------------------------

const getUserByEmail = async(email) => {
    
    const data = await Users.findOne({
        where: {
            email: email,
            isActive: true
        }
    })
    return data;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserByEmail
}