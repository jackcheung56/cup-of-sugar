import React, { useState, useEffect } from "react";
import '../styles/Form.css';

import { __UpdateItem } from '../services/ItemService'

import { useHistory } from 'react-router-dom';
import FormInput from '../components/FormInput'

const EditItemPage = (props) => {

  const data = props.history.location.detail.detail
  const callId = props.history.location.detail.detail.id
  console.log('data', data)
  console.log('id', callId)
  console.log(props)
  const [editItem, setEditItem] = useState({})

  

  const handleChange = ({ target }) => {
    setEditItem({...editItem, [target.name]: target.value})
    console.log('TARGET VALUE', target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log('Check State Before Call', editItem)
      const put = await __UpdateItem(editItem, callId)

      props.history.goBack()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>EDIT ITEM</h1>
      <form className="inputFields" onSubmit={handleSubmit}>

        <FormInput
          placeholder={data.title}
          name="title"
          value={editItem.title}
          onChange={handleChange}
        />

        <FormInput
          placeholder={data.category}
          name="category"
          value={editItem.category}
          onChange={handleChange}
        />

        <button>Submit</button>

      </form>

    </div>

  )
}

export default EditItemPage

