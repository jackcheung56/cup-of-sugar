const Router = require('express').Router()
const controller = require('../controllers/UserController')

//Routes go here

Router.get('/all', controller.GetUsers)
// http://localhost:3001/api/users/all


Router.get('/:user_id', controller.GetUserById)
// http://localhost:3001/api/users/1


Router.post('/add', controller.CreateUser)
// http://localhost:3001/api/users/add


Router.put('/update/:user_id', controller.UpdateUser)
// http://localhost:3001/api/users/update/1


Router.delete('/delete/:user_id', controller.DeleteUser)
// http://localhost:3001/api/users/delete/2



module.exports = Router


