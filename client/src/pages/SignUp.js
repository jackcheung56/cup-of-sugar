import React from "react";
import { Link } from "react-router-dom";
import { _CreateUser } from "../services/UserService";

export default function SignUp(setEmail, setPassword, setUsers) {
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitUser = (e) => {
    e.preventDefault();
    setUsers([{}]);
  };
  return (
    <form>
      <div>
        <input placeholder="Enter Email" name="email" type="email"></input>
        <input
          placeholder="Enter Password"
          name="password"
          type="password"
        ></input>
        <button>
          <Link to="/login">Sign Up</Link>
        </button>
      </div>
    </form>
  );
}
