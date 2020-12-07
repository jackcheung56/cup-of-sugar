import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { __GetItems } from '../services/ItemService'
import { __GetBorrows } from '../services/BorrowService'
import BorrowCard from '../components/BorrowCard'
import ItemCard from '../components/ItemCard'

import '../styles/Profile.css';

function Profile(props) {

  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const history = useHistory()

  console.log('User items', userItems)
  console.log('User Borrows', userBorrows)


  const getUserBorrows = async () => {
    try {
      const data = await __GetBorrows()
      setUserBorrows(data)
    } catch (error) {
      console.log(error)
    }
    
  }

  const getUserItems = async () => {
    try {
      const data = await __GetItems()
      setUserItems(data)
    } catch (error) {
      console.log(error)
    }
  }


  const handleClick = async (event) => {
    event.preventDefault()
    try {
      //
      history.push(`/items/add`)
      //push user id as an object with the path
      //
    } catch (error) {
      console.log(error)
    }
  }




  useEffect(() => {
    getUserBorrows()
    getUserItems()
  }, [])


  return (
    <div>

      <h1>Your Profile</h1>
      <div className="profilePage">

        <div className="itemListU">

          <h4>your items</h4>
          {/* <Link to={redirect}><button>add item</button></Link> */}
          <button onClick={handleClick}>Add Item</button>


          {userItems.map((item) => (
            <ItemCard
              //model attributes go here
              key={item._id}
              title={item.title}
              onClick={() => history.push(`/items/${item.id}`, item = { item })}
            //model attributes end here
            />
          ))}
        </div>

        <div className="borrowListU">

          <h4>items you have borrowed</h4>
          {userBorrows.map((borrow) => (
            <BorrowCard
              //model attributes go here
              key={borrow._id}
              name={borrow._id}
            //check status-if true-> push to edit borrow
            // onClick={() => history.push(`/borrows/${borrow.id}`, borrow={borrow})} 

            //Maybe use:
            //const response = await ApiClient.put(`/borrows/update/${borrow_id}`, formData)

            //model attributes end here
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Profile;





