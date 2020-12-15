import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {

    return (
        <div className="card" onClick={onClick}>
            <div>
                <div>
                    <img className="itemPhoto" src={image} alt="item"></img>
                </div>
            </div>

            <div className="itemInfo">
            </div>
            <h5 className="itemTitle">{title}</h5>
        </div>
    )
}

export default ItemCard



