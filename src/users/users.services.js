const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const registerUser = (req, res) => {
  const {
    surname,
    name,
    email,
    password,
    age,
    profileImg,
    phone,
    isActive
} = req.body;

  if (surname &&
    name &&
    email &&
    password &&
    age &&
    profileImg &&
    phone &&
    isActive) 
    {

    usersControllers
      .createUser({
        surname,
        name,
        email,
        password,
        age,
        profileImg,
        phone,
        isActive
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        surname: "string",
        name: "string",
        email: "example@example.com",
        password: "string",
        age: "21",
        profileImg: "http://example.com",
        phone: "+584145487898",
        isActive: "true"
      },
    });
  }
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const { surname, name, email, password, age, profileImg, phone, isActive } = req.body;

  usersControllers
    .updateUser(id, { surname, name, email, password, age, profileImg, phone, isActive })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//--------------------------------------------------

const getMyUser = (req, res) => {
  const id = req.user.id; 
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const { surname, name, email, password, age, profileImg, phone, isActive } = req.body;

  usersControllers
    .updateUser(id, { surname, name, email, password, age, profileImg, phone, isActive })
    .then(() => {
      res.status(200).json({ message: `Your user was edited succesfully!` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers.updateUser(id, { status: "inactive" })
      .then(() => {
        res.status(200).json({ message: `Your user was deleted succesfully!` });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
};

module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  registerUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser
};
