const Router = require("express").Router();
const controller = require("../controllers/UserController");
const { readToken, verifyJwt } = require("../middleware/index");

//Routes go here
Router.get("/session", readToken, verifyJwt, controller.SessionStatus); 
// Each function will execute in series until a response is sent back to a client. 
// If at any time you send back a response or throw an error in the middleware the request to stop at that function.

Router.get("/all", controller.GetUsers);
// http://localhost:3001/api/users/all

Router.get("/:user_id", controller.GetUserById);
// http://localhost:3001/api/users/1

Router.post("/add", controller.CreateUser);
// http://localhost:3001/api/users/add

Router.post("/login", controller.Login);
//http://localhost:3001/api/login

Router.put("/update/:user_id", controller.UpdateUser);
// http://localhost:3001/api/users/update/1

Router.delete("/delete/:user_id", controller.DeleteUser);
// http://localhost:3001/api/users/delete/2

module.exports = Router;
