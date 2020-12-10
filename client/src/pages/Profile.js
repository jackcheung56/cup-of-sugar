import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { __GetItemByOwner } from '../services/ItemService'
import { __GetBorrowByUserId } from '../services/BorrowService'
import { __GetBorrowRequests } from '../services/BorrowService'
import { __GetUser } from '../services/UserService'
import BorrowCard from '../components/BorrowCard'
import ItemCard from '../components/ItemCard'
import RatingCard from '../components/RatingCard'
import RequestCard from '../components/RequestCard'
import '../styles/Profile.css'


function Profile(props) {
  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [requests, setRequests] = useState([])
  const history = useHistory()

  const sortingId = props.currentUser.id
  const displayName = props.currentUser.name
  const profilePic = props.currentUser.picture

  console.log('Profile', props.currentUser.picture)


  const getBorrowRequests = async () => {
    try {
      const data = await __GetBorrowRequests(sortingId)
      let foo = data.data
      setRequests(foo)
    } catch (error) {
      console.log(error)
    }
  }


  const getUserBorrows = async () => {
    try {
      const data = await __GetBorrowByUserId(sortingId)

      let list = (data.data)
      console.log('this is user borrows', list)
      setUserBorrows(list)
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

      <div className="topDisplay">
        <div className="userDisplay">
          <img className="profilePic" src={profilePic}></img>
          <h4 className="username">{displayName}</h4>
        </div>

        <div className="notifications">
          <h5>NOTIFICATIONS</h5>
          <p></p>
          {requests.map((borrow) => (
            <RequestCard
              key={borrow.id}
              name={borrow.itemId}
              duration={borrow.duration}
              status={borrow.status}
              id={borrow.id}
            />
          ))}
        </div>
      </div>



      <div className="interface">

        <div className="itemListU">
          <h4>your items</h4>
          <button onClick={handleClick}>Add Item</button>
          {userItems.map((item) => (
            <ItemCard
              key={item.ownerId}
              title={item.title}
              onClick={() => history.push(`/items/${item.id}`, item = { item })}
            />
          ))}
        </div>


        <div className="borrowListU">
          <h4>items you have borrowed</h4>
          <p>no borrows</p>
          {userBorrows.map((borrow) => {
            if (borrow.accepted === true) {
              return (
                <BorrowCard
                  key={borrow.index}
                  duration={borrow.duration}
                  id={borrow.id}
                  accepted={borrow.accepted}
                />
              )
            } else {
              // return (<p>{userBorrows.length}</p>)
            }
          })}
        </div>


        {/* <div className="rating"><h4>My Rating</h4><RatingCard key={userInfo.id} name={userInfo.name} rating={userInfo.rating} /></div> */}





      </div>
    </div >
  );
}

export default Profile;





