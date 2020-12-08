import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description}) => {
    return (
    <div className="card" onClick={onClick}>
        <div>
            <img src={image}></img>
        </div>
        <div>
            <h4>{title}</h4>
            <p>Condition: {condition}</p>
            <p>Category: {category}</p>
            <p>Description: {description}</p>
        </div>
    </div>
    )
}

export default ItemCard



