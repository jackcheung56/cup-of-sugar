import React, { useState, useEffect } from "react";
import '../styles/Form.css';
import { __DeleteItem } from '../services/ItemService'

const DeleteItemPage = (props) => {

    const data = props.history.location.detail.detail
    const callId = props.history.location.detail.detail.id
    const [removeItem, setRemoveItem] = useState({})

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const del = await __DeleteItem(callId)
            props.history.push('/users/:user_id')
        } catch (error) {
            console.log(error)
        }
    }

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
            <button className="confirmationBtn" onClick={handleSubmit}>CONFIRM</button>
            <button className="cancelBtn" onClick={cancelSubmit}>CANCEL</button>
        </div>

    )
}

export default DeleteItemPage
