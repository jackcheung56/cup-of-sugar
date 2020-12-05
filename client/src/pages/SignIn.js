import React from "react";
import { Link } from "react-router-dom";

function SignIn(email, password) {
  console.log(email, password);
  return (
    <div>
      <form>
        <input placeholder="Enter Email" name="email" type="email" value="" />
        <input
          placeholder="Enter Password"
          name="password"
          type="password"
          value=""
        />
        <button>
          <Link to="/login">Login</Link>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
