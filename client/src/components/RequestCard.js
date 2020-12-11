<<<<<<< HEAD
import React from "react";
import "../styles/Card.css";

const RequestCard = ({ onClick, status, duration }) => {
  return (
    <div className="card" onClick={onClick}>
      <div>{/* <img src={image}></img> */}</div>

      <div>
        <h3>request</h3>
        <h3>{duration}</h3>
        <h3>{status}</h3>
        <div>
          <button>Accept</button>
          <button>Decline</button>
=======
import React, { useState, useEffect } from 'react'
import { __UpdateBorrow } from '../services/BorrowService'
import { __UpdateItem  } from '../services/ItemService'
import { __DeleteBorrow } from '../services/BorrowService'
import '../styles/Notification.css'



const RequestCard = ({ status, duration, id, history, message, product, userInfo, confirmation, setConfirmation, item_id }) => {

    const userRoute = userInfo.id
    const [response, setResponse] = useState('')
    const [layout, setLayout] = useState(false)

    const isBorrowed = {
        isBorrowed: true
    }

    

    const handleFillout = async (event) => {
        event.preventDefault()
        try {
            setLayout(!layout)
        } catch (error) {
            console.log(error)
        }
    }


    const responseInput = (event) => {
        setResponse(event.target.value);
    };

    const handleApproval = (event) => {
        event.preventDefault()
        const approval = {
            accepted: true,
            form: response
        }
        sendApproval(approval, id)
        setResponse('')
        setConfirmation(true)
    }

    const sendApproval = (approval, id) => {
        console.log(approval, id)
        __UpdateBorrow(approval, id)
        console.log(isBorrowed)
        __UpdateItem(isBorrowed, item_id)

    }

    const deleteRequest = async (event) => {
        event.preventDefault()
        try {
            const del = await __DeleteBorrow(id)
            history.push(`/users/${userRoute}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            {!layout ?

                <div>
                    <div>
                        <p>{product}</p>
                        <p>{duration}</p>
                        <p>{message}</p>
                        <p>{status}</p>
                        <p>{id}</p>
                    </div>
                    <div className="ticketBtns">
                        <button onClick={handleFillout}>Accept</button>
                        <button onClick={deleteRequest}>Decline</button>
                    </div>
                </div>

                :

                <div className="confirmation">
                    {!confirmation ?
                        <div>
                            <input
                                placeholder="message for requester"
                                name="response"
                                value={response}
                                onChange={responseInput}
                            ></input>

                            <button onClick={(event) => { handleApproval(event); }}>Confirm</button>

                            <button onClick={deleteRequest}>Decline</button>
                        </div>
                        :
                        <div>
                        </div>
                    }
                </div>
            }
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
        </div>
      </div>
    </div>
  );
};
export default RequestCard;
