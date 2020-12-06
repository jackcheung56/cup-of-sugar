import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { __GetItems } from '../services/ItemService'
import ItemCard from '../components/ItemCard'

function Browse(props) {
    
    const itemList = props.item
    // console.log('BROWSE', props, item)
    console.log('PROPS', props)
    let history = props.history
    

    
    //Check to see if the data is being passed as props
    // console.log('Browse Page', item)
    // console.log('ItemList', itemList)

    console.log(props)
    // props.history.state = {target:props.item}
    // console.log(props.history.state)



    return (
        <div>
            <h1>browse all items</h1>
            <div className="itemList">
                {itemList.map((item) => (
                    <ItemCard
                        //model attributes go here
                        key={item._id}
                        title={item.title}
                        onClick={() => history.push(`/items/${item.id}`, item={item})} 
                       

                        //make sure you are using the correct path(* see router)
                        

                        //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}

export default Browse;





