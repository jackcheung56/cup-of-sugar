import React, {useEffect, useState} from 'react'
import '../styles/Card.css'

const RatingCard = ({ onClick, name, rating}) => {
    const [rate, setRating] = useState('\u2615')
    
    return (
    <div className="card">
        <div>
            <h3>{name}'s Rating</h3>
            <h4>Rating: {rating}</h4>
        </div>
        <div>{rate}</div>
        <button onClick = {() => setRating(rate + '\u2615')}>Rate Me!</button>
    </div>
    )}


export default RatingCard