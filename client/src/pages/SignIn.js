import React, { useState } from "react";
import { __LoginUser } from "../services/UserService";
import '../styles/Form.css'
const SignIn = (props) => {
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const emailInput = (event) => {
    event.preventDefault();
    setTempEmail(event.target.value);
  };
  const passwordInput = (event) => {
    event.preventDefault();
    setTempPassword(event.target.value);
  };
  const logHandler = async (event) => {
    event.preventDefault();
    try {
      const userInfo = {
        email: tempEmail,
        password: tempPassword,
      };
           
      const signIn = await __LoginUser(userInfo);
      props.toggleAuthenticated(true, signIn.user.id);
      props.setAuthenticated(true);
      props.setCurrentUser(signIn.user);
      props.history.push(`/users/${signIn.user.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return !props.authenticated && !props.currentUser ? (
    <div className="template">
      <form className="outerForm">
        <h1 className="uxTitle">Sign In</h1>
        <div className="block">
          <input
            className="styleInput"
            placeholder='Email'
            name="email"
            value={tempEmail}
            onChange={emailInput}
            type="email"
          ></input>
          <input
            className="styleInput"
            placeholder='Password'
            name="password"
            value={tempPassword}
            onChange={passwordInput}
            type="password"
          ></input>
          <button className="styleButton" onClick={logHandler}>Login</button>
        </div>
      </form>
    </div>
  ) : (
    <h1>You're already signed in</h1>
  );
}
export default SignIn;
