import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title}) => (

    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>{title}</h3>
            <p>Category: Sports</p>
            <p>Condition: Good</p>
        </div>
    </div>
)

export default ItemCard



