import React, { useState, useEffect } from "react";
import { __LoginUser } from "../services/UserService";
// import PropTypes from "prop-types";

const SignIn = (props) => {
  console.log("Props", props);
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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      props.setCurrentUser(foundUser);
    }
  }, []);

  return !props.authenticated && !props.currentUser ? (
    <div>
      <form>
        <h1>Sign In</h1>
        <div className="block">
          <input
            placeholder={props.user.email}
            name="email"
            value={tempEmail}
            onChange={emailInput}
            type="email"
          ></input>
          <input
            placeholder={props.user.password}
            name="password"
            value={tempPassword}
            onChange={passwordInput}
            type="password"
          ></input>
          <button onClick={logHandler}>Login</button>
        </div>
      </form>
    </div>
  ) : (
    <h1>You're alradyt signed in</h1>
  );
};

export default SignIn;
