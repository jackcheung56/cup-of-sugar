import React, { useState, useEffect } from 'react'
import { __GetItemById } from '../services/ItemService'
import { Link } from 'react-router-dom'

function ItemDetailsPage(props) {
    //Basic template
    //we are passing props to item details from the BrowsePage
    //what we need to run the getDetails function is an id
    //drill down into the data until you find the info needed

    // console.log('ID', props.location.state.item.id)



    const detailRoute = props.location.state.item.id
    const [detail, setDetail] = useState({})


    const getDetails = async () => {
        try {
            const data = await __GetItemById(detailRoute)
            // console.log('Name the page Here', data)
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
            <Link to={{pathname: `/items/update/${detail.id}`, detail: {detail}}}><button>Edit</button></Link>

            <Link to={{pathname: `/items/delete/${detail.id}`, detail: {detail}}}><button>Delete</button></Link>



            <h1>Item Details</h1>
            <div className="detailsContainer">
                <h1>{detail.title}</h1>

            </div>
        </div>
    );
}

export default ItemDetailsPage;


