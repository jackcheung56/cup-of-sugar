import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __CreateItem } from '../services/ItemService'
import FormInput from '../components/FormInput'

const AddItemPage = () => {
  const [newItem, setNewItem] = useState({})

  console.log(newItem)


  const handleChange = ({ target }) => {
    setNewItem({ ...newItem, [target.name]: target.value})
    console.log('TARGET VALUE', target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('Check State Before Call', newItem)
      let post = await __CreateItem(newItem)

      // this.props.history.push(`/users/${user.id}`)

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
