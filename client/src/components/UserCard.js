import React from 'react'
import '../styles/Card.css'

const UserCard = ({ onClick, name}) => (

    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>{name}</h3>
        </div>
    </div>
)

export default UserCard



