import React from "react";
import "../styles/Card.css";

const RequestCard = ({ onClick, status, duration }) => {
  return (
    <div className="card" onClick={onClick}>
      <div>{/* <img src={image}></img> */}</div>

      <div>
        <h3>request</h3>
        <h3>{duration}</h3>
        <h3>{status}</h3>
        <div>
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
    </div>
  );
};
export default RequestCard;
