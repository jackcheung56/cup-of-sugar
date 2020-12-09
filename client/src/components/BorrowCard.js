import React from 'react'
import '../styles/Card.css'

const BorrowCard = ({id, accepted, contact_id, duration}) => {
return (
    <div className="card">
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>{duration}</h3>
            <h3>{id}</h3>
            <h3>{accepted}</h3>
        </div>
    </div>
)
}
export default BorrowCard


