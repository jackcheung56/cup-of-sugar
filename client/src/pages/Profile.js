import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { __GetItems } from '../services/ItemService'
import { __GetBorrows } from '../services/BorrowService'
import {__GetUser} from '../services/UserService'
import BorrowCard from '../components/BorrowCard'
import ItemCard from '../components/ItemCard'
import RatingCard from '../components/RatingCard'

import '../styles/Profile.css';

function Profile(props) {

  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const [userInfo, setUserInfo] = useState([]) 
  const history = useHistory()

  console.log('User items', userItems)
  console.log('User Borrows', userBorrows)
  console.log('User Info', userInfo)


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

  const getUserData = async () => {
    try{
      const data = await __GetUser(1)
      console.log("user data:", data)
      setUserInfo([data])
    } catch (error) {
      throw error
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
    getUserData()
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
              key={item.id}
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
              key={borrow.id}
              name={borrow.itemId}
              status={borrow.status}
            //check status-if true-> push to edit borrow
            // onClick={() => history.push(`/borrows/${borrow.id}`, borrow={borrow})} 

            //Maybe use:
            //const response = await ApiClient.put(`/borrows/update/${borrow_id}`, formData)

            //model attributes end here
            />
          ))}
        </div>
        <div className="borrowListU">
            <h4>My Rating</h4>
            {userInfo.map((user) => (
              <RatingCard 
              key={user.id}
              name={user.name}
              rating={user.rating}
            />
            ))} 
          </div> 
       </div>
    </div>
  );
}

export default Profile;





