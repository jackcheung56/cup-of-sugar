import React from 'react'
import { useHistory } from 'react-router-dom';
// import { __GetItems } from '../services/ItemService'
import ItemCard from '../components/ItemCard'

function BrowsePage(props) {
    //Check to see if the data is being passed as props
    console.log(props)
    
    const itemList = props.item
    const history = useHistory()
    //Fun fact: this is the same as writing "const history = props.history" (i think...)
    

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
                        //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}

export default BrowsePage;





