<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { __GetItemByOwner } from "../services/ItemService";
import { __GetBorrowByUserId } from "../services/BorrowService";
import { __GetBorrowRequests } from "../services/BorrowService";
import { __UpdateBorrow } from "../services/BorrowService";
import { __GetUser } from "../services/UserService";
import BorrowCard from "../components/BorrowCard";
import ItemCard from "../components/ItemCard";
import RequestCard from "../components/RequestCard";
import "../styles/Profile.css";

function Profile(props) {
  console.log("Profile Page", props.match.params);

  const [userBorrows, setUserBorrows] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [requests, setRequests] = useState([]);
=======
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { __GetItemByOwner } from '../services/ItemService'
import { __GetBorrowByUserId } from '../services/BorrowService'
import { __GetBorrowRequests } from '../services/BorrowService'
import { __GetUser } from '../services/UserService'
import BorrowCard from '../components/BorrowCard'
import ItemCard from '../components/ItemCard'
import RequestCard from '../components/RequestCard'
import '../styles/Profile.css'

function Profile(props) {
  const [userBorrows, setUserBorrows] = useState([])
  const [userItems, setUserItems] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [requests, setRequests] = useState([])

  const [confirmation, setConfirmation] = useState(false)

  console.log('TRACK CURRENT USER', props.currentUser)

  console.log('TRACK USER', props.user)

  console.log('PARAMS', props.match.params.user_id)

>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8

  const history = useHistory();
  const sortingId = props.match.params.user_id;

  const displayName = props.currentUser.name;

<<<<<<< HEAD
  const [approval, setApproval] = useState({});

  const getBorrowRequests = async () => {
    try {
      const data = await __GetBorrowRequests(sortingId);
      console.log("FIND THE ID", data.data);
      let foo = data.data;
      setRequests(foo);
=======
  // const history = useHistory()

  const sortingId = props.currentUser.id
  const displayName = props.currentUser.name
  const profilePic = props.currentUser.picture

  // console.log(userBorrows)

  const getBorrowRequests = async () => {
    try {
      const data = await __GetBorrowRequests(sortingId)
      let foo = data.data
      // console.log(data)
      setRequests(foo)
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
    } catch (error) {
      console.log(error);
    }
<<<<<<< HEAD
  };

  const handleApproval = async () => {
    try {
      setApproval({});
      const approve = await __UpdateBorrow();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserBorrows = async () => {
    try {
      const data = await __GetBorrowByUserId(sortingId);
      console.log("maybe here", data);
      let foo = data.data;
      setUserBorrows(foo);
=======
  }

  const getUserBorrows = async () => {
    try {
      const data = await __GetBorrowByUserId(sortingId)

      let list = (data.data)

      setUserBorrows(list)
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
    } catch (error) {
      console.log(error);
    }
  };

  //Items

  const getUserItems = async () => {
    try {
      const data = await __GetItemByOwner(sortingId);
      setUserItems(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userItems)
  //User

  const getUserData = async () => {
    try {
      const data = await __GetUser(sortingId);
      setUserInfo(data);
    } catch (error) {
      throw error;
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
<<<<<<< HEAD
      history.push(`/items/add`);
      //push user id as an object with the path
=======
      props.history.push(`/items/add`)
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUserBorrows();
    getUserItems();
    getUserData();
    getBorrowRequests();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <h1>{displayName}</h1>
      <div className="profilePage">
=======

      <div className="topDisplay">
        <div className="userDisplay">
          <img className="profilePic" src={profilePic}></img>
          <h4 className="username">{displayName}</h4>
        </div>

        <div className="notifications">
          <h5>NOTIFICATIONS</h5>
          <p></p>
          {requests.map((borrow) => {
            if (!borrow.accepted === true) {
              return (
                <RequestCard
                  key={borrow.id}
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
              )
            } else {
              <div></div>
            }
          })}
        </div>
      </div>

      <div className="interface">

>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
        <div className="itemListU">
          <h4>your items</h4>
          <button onClick={handleClick}>Add Item</button>
          {userItems.map((item) => (
            <ItemCard
              key={item.ownerId}
              title={item.title}
<<<<<<< HEAD
              onClick={() =>
                history.push(`/items/${item.id}`, (item = { item }))
              }
              //model attributes end here
            />
          ))}
        </div>
=======
              isBorrowed={item.isBorrowed}
              image={item.image}
              onClick={() => props.history.push(`/items/${item.id}`, item = { item })}
            />
          ))}
        </div>


>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
        <div className="borrowListU">
          <h4>items you have borrowed</h4>
          <p>no borrows</p>
          {userBorrows.map((borrow) => {
<<<<<<< HEAD
            if (borrow.accepted === "true") {
              <BorrowCard
                key={borrow.id}
                name={borrow.itemId}
                status={borrow.status}
              />;
            } else {
              <p>No borrows have been made</p>;
            }
          })}
        </div>
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
=======
            if (borrow.accepted === true) {
              return (
                <BorrowCard
                  key={borrow.index}
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
              <p>no items have been borrowed</p>
            }
          })}
        </div>




>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
      </div>
    </div >
  );
}

export default Profile;
