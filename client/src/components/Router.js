import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


//Components
import Navbar from "./NavBar";

//Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Browse from "../pages/Browse";

function Router() {


  return (
    <div>
      <Navbar></Navbar>

      <Switch>

        <Route exact path='/'><Home></Home></Route>

        <Route path='/items/all'><Browse></Browse></Route>

        <Route path='/signin'><SignIn></SignIn></Route>

        <Route path='/signup'><SignUp></SignUp></Route>

        <Route path='/users/:user_id'><Profile></Profile></Route>

      </Switch>
    </div>
  );
}

export default Router;
