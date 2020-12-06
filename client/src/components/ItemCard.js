import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'



const ItemCard = ({ onClick, title, key }) => (
    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>{title}</h3>
            <Link to ='/items/1'><p>click</p></Link>

        </div>
    </div>
)

export default ItemCard
