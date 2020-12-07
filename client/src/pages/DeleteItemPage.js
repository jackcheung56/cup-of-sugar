import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __DeleteItem } from '../services/ItemService'

const DeleteItemPage = (props) => {

    const data = props.history.location.detail.detail
    const callId = props.history.location.detail.detail.id
    // console.log('data', data)
    // console.log('id', callId)
    console.log(props)
    const [removeItem, setRemoveItem] = useState({})

    console.log('Check Del', data)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const del = await __DeleteItem(callId)
            console.log(data.id, 'Deleted')
            props.history.push('/users/:user_id')
        } catch (error) {
            console.log(error)
        }
    }

    // history.push(`/items/${item.id}`, item={item})}

    const cancelSubmit = async (event) => {
        event.preventDefault()
        try {
            props.history.goBack()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setRemoveItem(data)
      }, [])

    return (
        <div>
            <p>Are you sure you want to remove this item?</p>
            <p>Item: {data.id}</p>
            <button className="confirmation" onClick={handleSubmit}>CONFIRM</button>
            <button className="cancel" onClick={cancelSubmit}>CANCEL</button>
        </div>

    )
}

export default DeleteItemPage
