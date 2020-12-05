import React from 'react'

const BorrowCard = ({onClick, user_id, item_id, status}) => {
    <div onClick={onClick}>
        <h3>{user_id}</h3>
        <h3>{item_id}</h3>
        <h3>{status}</h3>
    </div>
}

export default BorrowCard