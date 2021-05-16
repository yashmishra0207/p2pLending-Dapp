const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AppKey } = require("../constants/index.js");

// Create and Save a newUser
exports.signup = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    z;
  }

  const salt = await bcrypt.genSalt(10);

  // Create a User
  const user = new User({
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, salt),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err.message.includes("ER_DUP_ENTRY"))
      return res.status(409).send({
        message: "Email already exists",
      });
    else if (err.message)
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    else return res.send(data);
  });
};

// Find a single User with email
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(422).send({
      message: "Content can not be empty!",
    });
  }

  // Find User in the database
  User.findByEmail(req.body.email, async (err, data) => {
    if (err) {
      return res.status(500).send({
        message: err.message || "Some error occurred while searching the User.",
      });
    } else {
      const foundUser = data;

      if (!foundUser) {
        return res.status(401).send({
          message: "User not found",
        });
      }

      if (await bcrypt.compare(req.body.password, foundUser.password)) {
        delete foundUser.password;
        console.log(foundUser);
        console.log(process.env);
        const token = jwt.sign({ ...foundUser }, AppKey);
        return res
          .status(200)
          .json({ data: foundUser, token, message: "login succesfull" });
      }
      return res.status(401).json({ message: "Invalid Password" });
    }
  });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {};

// Find a single User with auserId
exports.findOne = (req, res) => {};

// Update a User identified by the userId in the request
exports.update = (req, res) => {};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};
