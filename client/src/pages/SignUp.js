import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { __CreateUser } from "../services/UserService";
import "../styles/Form.css";

function SignUp(props) {
  const [name, setName] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");

  const [tempPicture, setTempPicture] = useState("");
  const [tempPhone, setTempPhone] = useState("");

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

  const pictureInput = (event) => {
    setTempPicture(event.target.value);
  };

  const phoneInput = (event) => {
    setTempPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      email: tempEmail,
      password: tempPassword,

      phone: tempPhone,
      picture: tempPicture,
    };
    props.setUser(newUser);
    try {
      await __CreateUser(newUser);
      history.push("/login");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="template">
      <form className="outerForm" onSubmit={handleSubmit}>
        <h1 className="uxTitle">Sign Up</h1>
        <div className="block">
          <input
            className="styleInput"
          
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={nameInput}
            type="text"
          ></input>
          <input
            className="styleInput"
            placeholder="Enter Email"
            name="email"
            value={tempEmail}
            onChange={emailInput}
            type="email"
          ></input>
          <input
            className="styleInput"
            placeholder="Enter Password"
            name="password"
            value={tempPassword}
            onChange={passwordInput}
            type="password"
          ></input>

          <input
            className="styleInput"
            placeholder="Add Profile Picture"
            name="picture"
            value={tempPicture}
            onChange={pictureInput}
            type="photo"
          ></input>

          <input
            className="styleInput"
            placeholder="Enter phone number"
            name="phone"
            value={tempPhone}
            onChange={phoneInput}
            type="phone"
          ></input>

          <button className="styleButton" onClick={handleSubmit}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
