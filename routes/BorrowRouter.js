const Router = require('express').Router()
const controller = require('../controllers/BorrowController')


//Routes go here

Router.get('/all', controller.GetBorrows)
// http://localhost:3001/api/borrows/add


Router.post('/add', controller.CreateBorrow)
// http://localhost:3001/api/borrows/all


Router.put('/update/:borrow_id', controller.UpdateBorrow)
// http://localhost:3001/api/borrows/update/1


Router.delete('/delete/:borrow_id', controller.DeleteBorrow)
// http://localhost:3001/api/borrows/delete/1



module.exports = Router
