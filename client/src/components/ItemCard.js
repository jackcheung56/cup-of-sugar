import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {
    // console.log(isBorrowed)
    console.log(category)

    return (
        <div className="card" onClick={onClick}>


            <div>

                <div>
                    <img className="itemPhoto" src={image}></img>
                </div>

            </div>

            <div className="itemInfo">
            </div>
                <h4>{title}</h4>
                <p>Condition: {condition}</p>
                <p>{category}</p>
                {/* <p>{description}</p> */}

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



