import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __CreateItem } from '../services/ItemService'
import { useHistory } from 'react-router-dom';
import FormInput from '../components/FormInput'

const AddItemPage = () => {
  const [newItem, setNewItem] = useState({})
  const history = useHistory()

  console.log(newItem)


  const handleChange = ({ target }) => {
    setNewItem({ ...newItem, [target.name]: target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const post = await __CreateItem(newItem)
      
      history.push(`/users/:user_id`)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>ADD ITEM</h1>
      <form className="inputFields" onSubmit={handleSubmit}>

        <FormInput
          placeholder="item name"
          name="title"
          value={newItem.title}
          onChange={handleChange}
        />

        <FormInput
          placeholder="category"
          name="category"
          value={newItem.category}
          onChange={handleChange}
        />

        <button>Submit</button>

      </form>

    </div>

  )
}

export default AddItemPage
