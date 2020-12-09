const Router = require('express').Router()
const controller = require('../controllers/BorrowController')


//Routes go here

Router.get('/all', controller.GetBorrows)
// http://localhost:3001/api/borrows/all


Router.get('/:borrow_id', controller.GetBorrowById)
// http://localhost:3001/api/borrows/1


Router.post('/add', controller.CreateBorrow)
// http://localhost:3001/api/borrows/add


Router.put('/update/:borrow_id', controller.UpdateBorrow)
// http://localhost:3001/api/borrows/update/1


Router.delete('/delete/:borrow_id', controller.DeleteBorrow)
// http://localhost:3001/api/borrows/delete/1

Router.get('/get/:user_id', controller.GetBorrowByUserId)
// http://localhost:3001/api/borrows/get/:user_id


Router.get('/get/request/:contact_id', controller.GetBorrowRequests)
// http://localhost:3001/api/borrows/get/request/:contact_id


module.exports = Router






