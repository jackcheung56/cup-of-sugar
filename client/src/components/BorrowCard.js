import React from 'react'
import '../styles/Card.css'

const BorrowCard = ({ onClick, key, status, item_id}) => {
return (
    <div className="card" onClick={onClick}>
        <div>
            {/* <img src={image}></img> */}
        </div>
        <div>
            <h3>borrow</h3>
            <h3>{item_id}</h3>  
            <h3>{status}</h3>
            
        </div>
    </div>
)
}
export default BorrowCard


