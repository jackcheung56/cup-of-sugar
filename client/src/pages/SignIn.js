import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import { __GetUser } from '../services/UserService'

const SignIn = ({ user, setUser }) => {
  console.log("Sign In Props", user);

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
      setUser({
        email: { email },
        password: { password },
      });
      console.log("login test", user);
      setEmail("");
      setPassword("");
      // history.push(`/users/${user.id}`, user={user})
      toggleAuthenticated(true, setUser.user, () =>
        history.push("/users/:user_id")
      );
    } catch (error) {
      throw error;
    }
  };

  return (
    <form>
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
  );
};

export default SignIn;
