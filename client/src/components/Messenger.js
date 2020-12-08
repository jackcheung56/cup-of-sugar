import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

export default function Messenger() {
  const [name, setName] = useState({ name: "" });
  const [message, setMessage] = useState({ message: "" });

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  const onTextChange = (event) => {
    setName({ ...name, [event.target.name]: e.target.value });
  };

  const onMessageSubmit = (event) => {
    event.preventDefault();
    const { name } = name;
    const { message } = message;
    socket.emit("message", { name, message });
    setName({ name });
    setMessage({ message: "" });
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
      <form onSubmit={onMessageSubmit}>
        <h1>DMMMMMS</h1>
        <div>
          <input
            name="name"
            onChange={(event) => onTextChange(event)}
            value={name.name}
            label="Name"
          />
        </div>
        <div>
          <input
            name="message"
            onChange={(event) => onTextChange(event)}
            value={message.message}
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div>
        <h1>DM Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}
