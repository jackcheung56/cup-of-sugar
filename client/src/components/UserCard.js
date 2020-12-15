import React from 'react'
import '../styles/Card.css'

const UserCard = ({ onClick, name}) => (
    //to be implemented with post mvp browse by user feature

    <div className="card" onClick={onClick}>
        <div>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
    </div>
)

export default UserCard



