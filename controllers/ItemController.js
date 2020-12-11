const { Item } = require('../models')
const { Op, literal, fn, col } = require('sequelize')


const GetItemByOwner = async (req, res) => {
  try{
    let id = parseInt(req.params.owner_id)
    let owner = await Item.findAll({where: {  owner_id: id }})
    res.send(owner)
  } catch (error) {
    throw error
  }
}




const GetItemsByCategory = async (req, res) => {
  try{
    let category = req.params.category
    let sort = await Item.findAll({where: { category: category}})
    res.send(sort)
  } catch (error) {
    throw error
  }
}




const GetItems = async (req, res) => {
    try {
      const items = await Item.findAll()
      res.send(items)
    } catch (error) {
      throw error
    }
  }



  const GetItemById = async (req, res) => {
    try {
      let itemId = parseInt(req.params.item_id)
      let item = await Item.findByPk(itemId)
      res.send(item)
    } catch (error) {
      throw error
    }
  }
  



  const CreateItem = async (req, res) => {
    try {
      const item = await Item.create(req.body)
      res.send(item)
    } catch (error) {
      throw error
    }
  }
  


const UpdateItem = async (req, res) => {
  try {
    let itemId = parseInt(req.params.item_id)
    let updatedItem = await Item.update(req.body, {
      where: {
        id: itemId
      },
      returning: true
    })
    res.send(updatedItem)
  } catch (error) {
    throw error
  }
}




const DeleteItem = async (req, res) => {
    try {
      await Item.destroy({
        where: {
          id: req.params.item_id
        }
      })
      res.send({
        message: `item with id of ${req.params.item_id} deleted`,
        data: {
          id: req.params.item_id
        }
      })
    } catch (error) {
      console.log('ID', item_id)
      throw error
    }
  }


  module.exports = {
  DeleteItem,
  UpdateItem,
  GetItems,
  CreateItem,
  GetItemById,
  GetItemByOwner,
  GetItemsByCategory 
}
