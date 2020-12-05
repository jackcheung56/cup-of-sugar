import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";

function Router() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/signin">
          <SignIn
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          ></SignIn>
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
