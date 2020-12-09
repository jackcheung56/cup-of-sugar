import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function Messenger() {
  const [state, setState] = useState({ name: "", message: "" });

  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onMessageSubmit = (event) => {
    event.preventDefault();
    const { name, message } = state;

    console.log(state);
    socket.emit("message", { name, message });

    setState({ message: "", name });

  };

  const renderChat = () => {

    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  }; 

  return (
    <div>
      <form>
        <h1>DMMMMMS</h1>
        <div>
          <input
            name="name"
            onChange={(event) => onTextChange(event)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <input
            name="message"
            onChange={(event) => onTextChange(event)}
            value={state.message}
            label="Message"
          />
        </div>
        <button onClick={onMessageSubmit}>Send Message</button>
      </form>
      <div>
        <h1>DM Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}
