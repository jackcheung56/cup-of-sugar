import React, { useState, useEffect } from 'react'
import { __UpdateBorrow } from '../services/BorrowService'
import '../styles/Card.css'

const RequestCard = ({ onClick, status, item_id, duration, id }) => {

    const [approval, setApproval] = useState({})

    const handleApproval = async (event) => {
        let idValue = event.target.value
        console.log('yea dummy you can do it like this', idValue)
        try {
            setApproval({
                accepted: true
            })
            const approve = await __UpdateBorrow(approval, idValue)
            console.log('yea dummy you can do it like this')

        } catch (error) {
            console.log(error)
        }
    }

    //structure
    // (attribute being updated, id)

    //on click
    //need to update borrow
    //the target borrow is stored in requests/setRequests

    //approval gets set to key value pair
    //accepted: t
    //where does the id come from?
    //the id is stored in each card

    return (
        <div className="card">
            <div>
                {/* <img src={image}></img> */}
            </div>

            <div>
                <h3>request</h3>
                <h3>{duration}</h3>
                <h3>{status}</h3>
                <p>{id}</p>
            </div>
            <div className="ticketBtns">
                <button value={id} onClick={handleApproval}>Accept</button>
                <button>Decline</button>
            </div>
        </div>
    )
}
export default RequestCard


