import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {

    return (
        <div className="card" onClick={onClick}>

            <div>
                <div>
                    <img className="itemPhoto" src={image}></img>
                </div>
            </div>

            <div className="itemInfo">
            </div>
            <h4 className="itemTitle">{title}</h4>
            <p className="details">{category}</p>
            <div>
                <p className="description">{description}</p>
            </div>

            <div className="itemStatus">
                {isBorrowed === true ?
                    <p className="stat">item unavailabile </p>
                    :
                    <p className="stat">availabile</p>
                }
            </div>

        </div>
    )
}

export default ItemCard



