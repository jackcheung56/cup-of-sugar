const { json } = require("body-parser");
const { response } = require("express");
const { Borrow } = require("../models");
const {Op} = require('sequelize')

const GetBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.findAll();
    res.send(borrows);
  } catch (error) {
    throw error;
  }
}
 
  const CreateBorrow = async (req, res) => {
    try {
      const borrow = await Borrow.create(req.body, {returning: ['id']})
      console.log('here', borrow.id)
      res.send({borrow: borrow.id})
    } catch (error) {
      throw error
    }
  }


  const GetBorrowById = async (req, res) => {
    try {
      let borrowId = parseInt(req.params.borrow_id)
      let borrow = await Borrow.findByPk(borrowId)
      res.send(borrow)
    } catch (error) {
      throw error
    }
  }


  const GetBorrowByUserId = async (req, res) => {
    try {
      let id = parseInt(req.params.user_id)
      let borrow = await Borrow.findAll({attributes: ['id', 'user_id', 'item_id', 'status', 'duration', 'accepted', 'photo', 'info', 'contact_id', 'createdAt', 'message', 'form', 'product'], where: {user_id: id}})
      res.send(borrow)
    } catch (error) {
      throw error
    }
  }


  const GetBorrowRequests = async (req, res) => {
    try {
      let itemOwner = parseInt(req.params.contact_id)
      let borrow = await Borrow.findAll({attributes: ['id', 'user_id', 'item_id', 'status', 'duration', 'accepted', 'photo', 'info', 'contact_id', 'createdAt', 'message', 'form', 'product'], where: {contact_id: itemOwner}})
      res.send(borrow)
    } catch (error) {
      throw error
    }
  }


const DeleteBorrow = async (req, res) => {
  try {
    await Borrow.destroy({
      where: {
        id: req.params.borrow_id,
      },
    });
    res.send({
      message: `borrow with id of ${req.params.borrow_id} deleted`,
      data: {
        id: req.params.borrow_id,
      },
    });
  } catch (error) {
    throw error;
  }
};

const UpdateBorrow = async (req, res) => {
  console.log('HERE', req.body)
  let borrowId = parseInt(req.params.borrow_id);
  try {
    let updatedBorrow = await Borrow.update({
      accepted: req.body.accepted,
      form: req.body.form,
    }, {
      where: {
        id: borrowId,
      },
      returning: true,
    });
    res.send(updatedBorrow);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  DeleteBorrow,
  UpdateBorrow,
  GetBorrows,
  CreateBorrow,
  GetBorrowById,
  GetBorrowByUserId,
  GetBorrowRequests
};
