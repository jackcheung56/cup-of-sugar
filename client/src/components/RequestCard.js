import React, { useState } from "react";
import { __UpdateBorrow } from "../services/BorrowService";
import { __UpdateItem } from "../services/ItemService";
import { __DeleteBorrow } from "../services/BorrowService";
import "../styles/Notification.css";

const RequestCard = ({ duration, id, history, message, product, userInfo, confirmation, setConfirmation, item_id,}) => {
  
  const userRoute = userInfo.id;
  const [response, setResponse] = useState("");
  const [layout, setLayout] = useState(false);

  const isBorrowed = {
    isBorrowed: true,
  };

  const handleFillout = async (event) => {
    event.preventDefault();
    try {
      setLayout(!layout);
    } catch (error) {
      console.log(error);
    }
  };

  const responseInput = (event) => {
    setResponse(event.target.value);
  };

  const handleApproval = (event) => {
    event.preventDefault();
    const approval = {
      accepted: true,
      form: response,
    };
    sendApproval(approval, id);
    setResponse("");
    setConfirmation(true);
  };

  const sendApproval = (approval, id) => {
    __UpdateBorrow(approval, id);
    __UpdateItem(isBorrowed, item_id);
  };

  const deleteRequest = async (event) => {
    event.preventDefault();
    try {
      const del = await __DeleteBorrow(id);

      history.push(`/users/${userRoute}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="requestBox">
      {!layout ? (
        <div className="grid-container">
          <div className="container">
            <div className="iCon">
              <div className="circle">
                <p className="num">{id}</p>
              </div>
            </div>
            <ul className="list">
              <li className="liOne">{product}</li>
              <li className="liTwo">Duration: {duration}</li>
              <li className="liThree">Contact: {message}</li>
              <div className="ticketBtns">
                <button
                  placeholder="Accept"
                  className="btnOne"
                  onClick={handleFillout}
                >
                  Accept
                </button>
                <button
                  placeholder="Decline"
                  className="btnTwo"
                  onClick={deleteRequest}
                >
                  Decline
                </button>
              </div>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid-containerB">
          {!confirmation ? (
            <div className="containerB">
              <div className="ticketBtnsB">
                <button
                  className="btnOneB"
                  onClick={(event) => {
                    handleApproval(event);
                  }}
                >
                  Confirm
                </button>
                <button className="btnTwoB" onClick={deleteRequest}>
                  Decline
                </button>
              </div>
              <div className="formBox">
                <div className="cardName">
                  <p className="reply">Message</p>
                </div>
                <input
                  className="textMsg"
                  placeholder="message for requester"
                  name="response"
                  value={response}
                  onChange={responseInput}
                ></input>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default RequestCard;
