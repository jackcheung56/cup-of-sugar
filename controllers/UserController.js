const { User } = require('../models')



const GetUsers = async (req, res) => {
    try {
      const users = await User.findAll()
      res.send(users)
    } catch (error) {
      throw error
    }
  }


  //under construction

  const GetUserById = async (request, response) => {
    try{
        const {user_id} = request.params
        const data = await User.findById(user_id).populate([
            {
                path: 'users',
                model: 'user'
            }
        ])
        response.send(data)
    }
    catch (error) {
        throw error
    }
}

//under construction
  


  const CreateUser = async (req, res) => {
    try {
      const user = await User.create(req.body)
      console.log(user.id)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
  



const UpdateUser = async (req, res) => {
    try{
        let userId = parseInt(req.params.user_id)
        let updatedUser = await User.update(req.body, {
            where: 
            { id: userId },
            returning: true
        })
        res.send(updatedUser)
    } catch (error) {
        throw error
    }
}



const DeleteUser = async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.user_id
        }
      })
      res.send({
        message: `user with id of ${req.params.user_id} deleted`,
        data: {
          id: req.params.user_id
        }
      })
    } catch (error) {
      throw error
    }
  }


  module.exports = {
  DeleteUser,
  UpdateUser,
  GetUsers,
  CreateUser
}
