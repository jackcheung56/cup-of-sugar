import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ItemCard from '../components/ItemCard'
import { __GetItems } from "../services/ItemService";

function BrowsePage(props) {

    console.log('BP PROPS', props)

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

    const sortAppliances = async () => {
        setBrowseItems()
        try{
            // const category = await __GetItems()
            // setBrowseItems(category)
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getBrowseItems()
    }, [])

    const itemList = props.item
    const history = useHistory()

    

    return (
        <div>
            <div className="catButtons">
                <button onClick={sortAppliances}>Appliances</button>
                <button>Fitness</button>
            </div>



            <h1>browse all items</h1>

            <div className="itemList">
                {browseItems.map((item) => (
                    <ItemCard
                        //model attributes go here
                        key={item._id}
                        image={item.image}
                        title={item.title}
                        condition={item.condition}
                        category={item.category}
                        description={item.description}
                        onClick={() => history.push(`/items/${item.id}`, item={item})} 
                        //model attributes end here
                    />
                ))}
            </div>

        </div>
    );
}

export default BrowsePage;






