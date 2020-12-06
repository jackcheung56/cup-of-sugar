import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title}) => (

    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>{title}</h3>
        </div>
    </div>
)

export default ItemCard



