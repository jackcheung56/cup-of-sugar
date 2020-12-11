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

  const history = useHistory();
  const sortingId = props.match.params.user_id;

  const displayName = props.currentUser.name;

  const [approval, setApproval] = useState({});

  const getBorrowRequests = async () => {
    try {
      const data = await __GetBorrowRequests(sortingId);
      console.log("FIND THE ID", data.data);
      let foo = data.data;
      setRequests(foo);
    } catch (error) {
      console.log(error);
    }
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
      history.push(`/items/add`);
      //push user id as an object with the path
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
              onClick={() =>
                history.push(`/items/${item.id}`, (item = { item }))
              }
              //model attributes end here
            />
          ))}
        </div>
        <div className="borrowListU">
          <h4>items you have borrowed</h4>
          {userBorrows.map((borrow) => {
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
      </div>
    </div>
  );
}

export default Profile;
