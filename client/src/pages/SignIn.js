import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { __LoginUser } from "../services/UserService";
// import NavBar from "../components/NavBar";

const SignIn = (props) => {
  // console.log("Sign In Props", props.user);
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

  const loginHandler = (event) => {
    event.preventDefault();
    try {
      props.setUser({
        // email: { email },
        // password: { password },
      });
      console.log("login test", props.user);
      props.setEmail(tempEmail);
      props.setPassword(tempPassword);
      // history.push(`/users/${user.id}`, user={user})
      props.toggleAuthenticated(true, props.setUser.user, () =>
        history.push("/users/:user_id")
      );
    } catch (error) {
      throw error;
    }
  };

  return !props.authenticated && !props.currentUser ? (
    <form onSubmit={loginHandler}>
      <h1>Sign In</h1>
      <div className="block">
        <input
          placeholder="Enter Email"
          name="email"
          value={tempEmail}
          onChange={emailInput}
          type="text"
        ></input>
        <input
          placeholder="Enter Password"
          name="password"
          value={tempPassword}
          onChange={passwordInput}
          type="text"
        ></input>
        <button onClick={loginHandler}>Login</button>
      </div>
    </form>
  ) : (
    <h1>You're alradyt signed in</h1>
  );
};

export default SignIn;
