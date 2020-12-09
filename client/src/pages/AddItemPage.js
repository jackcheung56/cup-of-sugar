import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __CreateItem } from '../services/ItemService'
import { useHistory } from 'react-router-dom';
import FormInput from '../components/FormInput'

const AddItemPage = (props) => {
  // console.log('IDIDIDIDIDID', props.currentUser.id)
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
      <form className="inputFields">



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
          placeholder="description"
          name="description"
          value={newItem.description}
          onChange={handleChange}
        />

        {/* <button
          type="button"
          placeholder="Great"
          name="Great"
          value={newItem.condition = 'Great'}
          onChange={handleChange}
        >Great</button> */}

        {/* <input
          type="button"
          placeholder="Great"
          name="Great"
          value={newItem.condition = 'Great'}
          onChange={handleChange}
        >Great</input> */}



        {/* <button
          type="button"
          placeholder="Acceptable"
          name="Acceptable"
          value={newItem.condition = 'Acceptable'}
          onChange={handleChange}
        >Acceptable</button> */}

        {/* <button
          type="button"
          placeholder="Bad"
          name="Bad"
          value={newItem.condition = 'Bad'}
          onChange={handleChange}
        >Bad</button> */}

        <input type="hidden" name="ownerId" value={newItem.owner_id = loggedUser}></input>

        <button type="submit" onClick={handleSubmit}>Submit</button>

      </form>

    </div>

  )
}

export default AddItemPage
