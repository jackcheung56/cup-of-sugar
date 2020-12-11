import React from 'react'
import '../styles/Card.css'

const ItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {
    // console.log(isBorrowed)
    console.log(image)

    return (
        <div className="card" onClick={onClick}>


            <div>
                {/* <div className="itemStatus">
                    {isBorrowed === true ?
                        <p>item unavailabile </p>
                        :
                        <p>availabile</p>
                    }
                </div> */}
                <img className="itemPhoto" src={image}></img>
            </div>

            <div className="itemInfo">
                <h4>{title}</h4>
                <p>Condition: {condition}</p>
                <p>Category: {category}</p>
                <p>Description: {description}</p>
            </div>

        </div>
    )
}

export default ItemCard



