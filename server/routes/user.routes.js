module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/user/login", user.login);

  // Login a user
  app.post("/user/signup", user.signup);

  // Retrieve all users
  app.get("/user", user.findAll);

  // Retrieve a single user with userId
  app.get("/user/:userId", user.findOne);

  // Update a user with userId
  app.put("/user/:userId", user.update);

  // Delete a user with userId
  app.delete("/user/:userId", user.delete);

  // Create a new user
  app.delete("/user", user.deleteAll);
};
