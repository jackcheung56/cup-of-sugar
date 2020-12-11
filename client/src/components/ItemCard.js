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
            <p className="details">{category}</p>
            <h4 className="itemTitle">{title}</h4>
            <div>

                {/* <p className="details">Condition: {condition}</p> */}
            </div>
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



