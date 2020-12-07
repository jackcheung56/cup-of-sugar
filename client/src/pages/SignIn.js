import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { __LoginUser } from "../services/UserService";
// import NavBar from "../components/NavBar";

const SignIn = ({ authenticated, currentUser, props }) => {
  console.log("Sign In Props", props.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    try {
      props.setUser({
        email: { email },
        password: { password },
      });
      console.log("login test", props.user);
      setEmail("");
      setPassword("");
      // history.push(`/users/${user.id}`, user={user})
      props.toggleAuthenticated(true, props.setUser.user, () =>
        history.push("/users/:user_id")
      );
    } catch (error) {
      throw error;
    }
  };

  return !authenticated && !currentUser ? (
    <form onSubmit={loginHandler}>
      <h1>Sign In</h1>
      <div className="block">
        <input
          placeholder="Enter Email"
          value={email}
          onChange={emailInput}
          type="text"
        ></input>
        <input
          placeholder="Enter Password"
          value={password}
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
