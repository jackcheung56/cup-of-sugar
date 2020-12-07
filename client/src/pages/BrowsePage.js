import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ItemCard from '../components/ItemCard'
import { __GetItems } from "../services/ItemService";

function BrowsePage(props) {
    //Check to see if the data is being passed as props
    // useEffect(() => {
    //     setItem(item)
    //     console.log('Check State', item)
    //   }, [])
     const [browseItems, setBrowseItems] = useState([])
    console.log(props)
    
    const getBrowseItems = async () => {
        try{
            const data = await __GetItems()
            setBrowseItems(data)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getBrowseItems()
    }, [])

    const itemList = props.item
    const history = useHistory()
    //Fun fact: this is the same as writing "const history = props.history" (i think...)
    

    return (
        <div>
            <h1>browse all items</h1>
            <div className="itemList">
                {browseItems.map((item) => (
                    <ItemCard
                        //model attributes go here
                        key={item._id}
                        title={item.title}
                        onClick={() => history.push(`/items/${item.id}`, item={item})} 
                        //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}

export default BrowsePage;





