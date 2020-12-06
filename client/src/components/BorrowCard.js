import React from 'react'
import '../styles/Card.css'

const BorrowCard = ({ onClick, key}) => (

    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>borrow</h3>
            <h3>{key}</h3>
        </div>
    </div>
)

export default BorrowCard


