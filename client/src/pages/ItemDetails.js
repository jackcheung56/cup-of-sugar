import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { __GetItemById } from '../services/ItemService'

function ItemDetails({item}) {

    const [detail, setDetail] = useState({})
    

    const getDetails = async () => {
        try {
            const data = await __GetItemById(1)
            console.log('Details Page', data)
            setDetail(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetails()
    }, [])




    return (
        <div className="detailsPage">
            <h1>Item Details</h1>
            <div className="detailsContainer">
                <h1>{detail.title}</h1>
            </div>
        </div>
    );
}

export default ItemDetails;

