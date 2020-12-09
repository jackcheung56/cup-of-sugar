import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { __CreateUser } from "../services/UserService";
//pushing for Jackie
function SignUp(props) {
  console.log(props);
  const [name, setName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const history = useHistory();

  const emailInput = (event) => {
    event.preventDefault();
    setTempEmail(event.target.value);
  };

  const passwordInput = (event) => {
    setTempPassword(event.target.value);
  };

  const nameInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      email: tempEmail,
      password: tempPassword,
    };
    props.setUser(newUser);
    try {
      await __CreateUser(newUser);
      console.log(newUser);
      
      history.push("/login");
    } catch (error) {
      throw error;
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div className="block">
        <input
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={nameInput}
          type="text"
        ></input>
        <input
          placeholder="Enter Email"
          name="email"
          value={tempEmail}
          onChange={emailInput}
          type="email"
        ></input>
        <input
          placeholder="Enter Password"
          name="password"
          value={tempPassword}
          onChange={passwordInput}
          type="password"
        ></input>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </form>
  );
}
export default SignUp;