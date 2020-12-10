import React from 'react'
import '../styles/Card.css'

const BorrowCard = ({id, accepted, duration, photo, product, item_id, history}) => {
return (
    <div className="card">
        <div>
            <img src={photo}></img>
        </div>
        <div>
            <h3>{product}</h3>
            <h3>{duration}</h3>
            <h3>{id}</h3>
            <h3>{accepted}</h3>
        </div>
    </div>
)
}
export default BorrowCard

// onClick={() => history.push(`/items/${item_id}` item = { item })}


