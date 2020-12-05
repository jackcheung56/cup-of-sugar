import { image } from 'faker'
import React from 'react'

const ItemCard = ({onClick, title, isBorrowed, category, ownerId}) => (
    <div onClick={onClick}>
        <h2>{title}</h2>
        <h3>{category}</h3>
        <h3>{isBorrowed}</h3>
        <h3>{ownerId}</h3>
    </div>
)

export default ItemCard