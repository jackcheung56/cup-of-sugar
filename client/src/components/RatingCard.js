import React from 'react'
import '../styles/Card.css'

const RatingCard = ({ onClick, name, rating}) => {
    return (
    <div className="card" onClick={onClick}>
        <div>
            <h2>User's Rating</h2>
            <h3>Name: {name}</h3>
            <h4>Rating: {rating}</h4>
        </div>
    </div>
    )}


export default RatingCard