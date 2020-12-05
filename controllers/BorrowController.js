const { Borrow } = require("../models");

const GetBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.findAll();
    res.send(borrows);
  } catch (error) {
    throw error;
  }
};

const CreateBorrow = async (req, res) => {
  try {
    const borrow = await Borrow.create(req.body);
    res.send(borrow);
  } catch (error) {
    throw error;
  }
};

const UpdateBorrow = async (req, res) => {
  try {
    let borrowId = parseInt(req.params.borrow_id);
    let updatedBorrow = await Borrow.update(req.body, {
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

module.exports = {
  DeleteBorrow,
  UpdateBorrow,
  GetBorrows,
  CreateBorrow,
};
