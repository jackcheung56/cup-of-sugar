import React, { useState, useEffect } from 'react'
import { __GetItemByOwner } from '../services/ItemService'
import { __GetBorrowByUserId } from '../services/BorrowService'
import { __GetBorrowRequests } from '../services/BorrowService'
import { __GetUser } from '../services/UserService'
import BorrowCard from '../components/BorrowCard'
import ProfileItemCard from '../components/ProfileItemCard'
import RequestCard from '../components/RequestCard'
import '../styles/Profile.css'

function Profile(props) {
  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [requests, setRequests] = useState([])
  const [confirmation, setConfirmation] = useState(false)
  const [navTab, setNavTab] = useState(false)
  const sortingId = props.currentUser.id
  const displayName = props.currentUser.name
  const profilePic = props.currentUser.picture
  const profileEmail = props.currentUser.email

  const switchDisplay = () => {
    setNavTab(!navTab)
  }
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
      props.history.push(`/items/add`)
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
    <div className="profBackground">
      <div className="grid-containerC">
        <div className="userDisplay">
          <div className="photoCon">
            <img className="proPic" src={profilePic}></img>
            <div className="proInfo">
              <h4 className="userName">{displayName}</h4>
              <p className="emailSub">{profileEmail}</p>
              <button className="addBtn" onClick={handleClick}>Add Item</button>
            </div>
            <div className="notifiCon">
              <h5 className="notiTitle">Notifications</h5>
              {requests.map((borrow, index) => {
                if (!borrow.accepted === true) {
                  return (
                    <div className="notificationBox">
                      <RequestCard
                        key={index}
                        name={borrow.itemId}
                        duration={borrow.duration}
                        status={borrow.status}
                        id={borrow.id}
                        item_id={borrow.item_id}
                        info={borrow.info}
                        photo={borrow.photo}
                        message={borrow.message}
                        product={borrow.product}
                        history={props.history}
                        userInfo={userInfo}
                        confirmation={confirmation}
                        setConfirmation={setConfirmation}
                      />
                    </div>
                  )
                } else {
                  <div></div>
                }
              })}
            </div>
          </div>
        </div>
        <div className="itemCol">
          <div className="naviBox">
            <div className="navi">
              <div className="bor">
                <button className="borrowButton" onClick={switchDisplay}>Your Borrows</button>
              </div>
              <div className="ite">
                <button className="itemButton" onClick={switchDisplay}>Your Stuff</button>
              </div>
            </div>
          </div>
          <div className="bxBox">
            {!navTab ?
              <div>
                <div className="itemsDisplay">
                  {userItems.map((item) => (
                    <ProfileItemCard
                      key={item.ownerId}
                      title={item.title}
                      isBorrowed={item.isBorrowed}
                      description={item.description}
                      category={item.category}
                      image={item.image}
                      condition={item.condition}
                      ownerId={item.ownerId}
                      onClick={() => props.history.push(`/items/${item.id}`, item = { item })}
                    />
                  ))}
                </div>
                <div className="borrowsDisplay"></div>
              </div>
              :
              <div>
                <div className="itemsDisplay"></div>
                <div className="borrowsDisplay">
                  {userBorrows.map((borrow, index) => {
                    if (borrow.accepted === true) {
                      return (
                        <BorrowCard
                          className="bCard"
                          key={index}
                          duration={borrow.duration}
                          id={borrow.id}
                          item_id={borrow.item_id}
                          accepted={borrow.accepted}
                          photo={borrow.photo}
                          product={borrow.product}
                          history={props.history}
                        />
                      )
                    } else {
                      <p>no borrows</p>
                    }
                  })}
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div >
  );
}
export default Profile;
