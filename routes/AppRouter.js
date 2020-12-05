const Router = require('express').Router()



const UserRouter = require('./UserRouter')
const ItemRouter = require('./ItemRouter')
const BorrowRouter = require('./BorrowRouter')



Router.use('/users', UserRouter)
Router.use('/items', ItemRouter)
Router.use('/borrows', BorrowRouter)



module.exports = Router