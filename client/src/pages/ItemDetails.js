import React, { useState, useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import { __GetItemById } from '../services/ItemService'

function ItemDetails(props) {
    //Basic template
    //we are passing props to item details from the BrowsePage
    //what we need to run the getDetails function is an id
    //drill down into the data until you find the info needed


    // console.log('ID', props.location.state.item.id)
    

    const pathName = props.location.state.item.id
    const [detail, setDetail] = useState({})
    

    const getDetails = async () => {
        try {
            const data = await __GetItemById(pathName)
            console.log('Name the page Here', data)
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


