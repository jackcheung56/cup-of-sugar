import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __CreateItem } from '../services/ItemService'
import { useHistory } from 'react-router-dom';
import FormInput from '../components/FormInput'

const AddItemPage = (props) => {
  console.log('add item page', props.currentUser)
  const [newItem, setNewItem] = useState({})
  const history = useHistory()
  const loggedUser = props.currentUser.id

  console.log('ADD', newItem)


  const handleChange = ({ target }) => {
    setNewItem({ ...newItem, [target.name]: target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const post = await __CreateItem(newItem)

      history.push(`/users/${loggedUser}`)

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

        <FormInput
          placeholder="image"
          name="image"
          value={newItem.image}
          onChange={handleChange}
        />

        <FormInput
          placeholder="condition"
          name="condition"
          value={newItem.condition}
          onChange={handleChange}
        />

        <FormInput
          placeholder="description"
          name="description"
          value={newItem.description}
          onChange={handleChange}
        />

        {/* <button
          placeholder="Great"
          name="Great"
          value={newItem.condition}
          onChange={handleChange}
        ></button>

        <button
          placeholder="Acceptable"
          name="Acceptable"
          value={newItem.condition}
          onChange={handleChange}
        ></button>

        <button
          placeholder="Bad"
          name="Bad"
          value={newItem.condition}
          onChange={handleChange}
        ></button> */}

        {/* <FormInput
          placeholder="ownerId"
          name="ownerId"
          value={newItem.owner_id}
          onChange={handleChange}
        /> */}

        <button>Submit</button>

      </form>

    </div>

  )
}

export default AddItemPage
