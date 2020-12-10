import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {
    console.log(isBorrowed)

    return (
        <div className="card" onClick={onClick}>

            <div className="item status">
                {isBorrowed === true ?
                    <p>item unavailabile </p>
                    :
                    <p>availabile</p>
                }
            </div>

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



