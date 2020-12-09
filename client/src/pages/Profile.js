import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { __GetItemByOwner } from '../services/ItemService'
import { __GetBorrowByUserId } from '../services/BorrowService'
import { __GetBorrowRequests } from '../services/BorrowService'
import { __UpdateBorrow } from '../services/BorrowService'
import { __GetUser } from '../services/UserService'
import BorrowCard from '../components/BorrowCard'
import ItemCard from '../components/ItemCard'
import RatingCard from '../components/RatingCard'
import RequestCard from '../components/RequestCard'




import '../styles/Profile.css';

function Profile(props) {
  console.log('Profile Page', props)
  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [requests, setRequests] = useState([])

  const history = useHistory()
  const sortingId = props.currentUser.id
  const displayName = props.currentUser.name

  const [approval, setApproval] = useState({})

  // console.log('User items', userItems)
  // console.log('User Borrows', userBorrows)
  // console.log('User Info', userInfo)




  const getBorrowRequests = async () => {
    try {
      const data = await __GetBorrowRequests(sortingId)
      console.log('FIND THE ID', data.data)
      let foo = data.data
      setRequests(foo)
    } catch (error) {
      console.log(error)
    }
  }

  //get borrow requests grabs all the requests made on a user's items
  //before the requests populate on the requester side,
  //the owner must click accept



  //on click
  //need to update borrow
  //the target borrow is stored in requests/setRequests

  //BACK UP 
  //every borrow has a unique field manually entered
  //that matches the id?
  //how can the new field by assigned the value of the id if it never has access?
  //add a counter to the create function-> make this value = to the new "pk"
  //start the site again and add a model that stores the count...
  //any time a borrow needs to be found by id, this counter value can be used


 
  const handleApproval = async () => {
    try{
      setApproval({

      })
      const approve = await __UpdateBorrow()

    } catch (error) {
      console.log(error)
    }
  }








  //===============================================================


  const getUserBorrows = async () => {
    try {
      const data = await __GetBorrowByUserId(sortingId)
      console.log('maybe here', data)
      let foo = data.data
      setUserBorrows(foo)
    } catch (error) {
      console.log(error)
    }
  }


  //Items

  const getUserItems = async () => {
    try {
      const data = await __GetItemByOwner(sortingId)
      setUserItems(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  //User

  const getUserData = async () => {
    try {
      const data = await __GetUser(sortingId)
      setUserInfo(data)
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
    getBorrowRequests()
  }, [])


  return (
    <div>

      <h1>{displayName}</h1>

      <div className="profilePage">

        <div className="itemListU">
          <h4>your items</h4>
          <button onClick={handleClick}>Add Item</button>
          {userItems.map((item) => (
            <ItemCard
              //model attributes go here
              key={item.ownerId}
              title={item.title}
              onClick={() => history.push(`/items/${item.id}`, item = { item })}
            //model attributes end here
            />
          ))}
        </div>


        {/* <div className="borrowListU">
          <h4>items you have borrowed</h4>
          {userBorrows.map((borrow) => (
            <BorrowCard
              //model attributes go here
              key={borrow.id}
              name={borrow.itemId}
              status={borrow.status}
            //check status-if true-> push to edit borrow
            //model attributes end here
            />
          ))}
        </div> */}


        <div className="borrowListU">
          <h4>items you have borrowed</h4>
          {userBorrows.map((borrow) => {
            if (borrow.accepted === 'true') {
              <BorrowCard
                key={borrow.id}
                name={borrow.itemId}
                status={borrow.status}
              />
            } else {
              <p>No borrows have been made</p>
            }
          })}
        </div>




        {/* <div className="borrowListU"><h4>My Rating</h4><RatingCard key={userInfo.id} name={userInfo.name} rating={userInfo.rating} /></div> */}


        <div className="notifications">
          <h4>NOTIFICATIONS (borrow requests)</h4>
          <p>requests made by others to borrow your stuff</p>
          {requests.map((borrow) => (
            <RequestCard
              key={borrow.id}
              name={borrow.itemId}
              duration={borrow.duration}
              status={borrow.status}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Profile;





