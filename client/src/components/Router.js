import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';

//Services
import { __GetItems } from '../services/ItemService'
// import { __GetUser } from '../services/UserService'

//Components
import Navbar from "./NavBar";

//Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import BrowsePage from "../pages/BrowsePage";
import UserList from "../pages/UserList";

import AddItemPage from "../pages/AddItemPage";
import EditItemPage from "../pages/EditItemPage";
import DeleteItemPage from "../pages/DeleteItemPage";


import ItemDetailsPage from "../pages/ItemDetailsPage";




function Router(props) {

  //State
  const [item, setItem] = useState([])
  const [user, setUser] = useState({})
  const [borrow, setBorrow] = useState([])
  const history = useHistory();


  //Functions

  const getAllItems = async () => {
    try {
      const data = await __GetItems()
      // console.log('ROUTER', data)
      setItem(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllItems()
    // getUser()
  }, [])


  
  return (
    <div>

      <Navbar user={user}></Navbar>

      <Switch>

        {/* <Route exact path='/'><Home></Home></Route> */}

        <Route exact path='/'><Home item={item} setItem={setItem} ></Home></Route>

        <Route exact path='/users/all'><UserList></UserList></Route>

        <Route exact path="/items/all" component={() => (<BrowsePage item={item} setItem={setItem} history={history}></BrowsePage>)} />

        <Route path='/users/:user_id'><Profile borrow={borrow} setBorrow={setBorrow} user={user} setUser={setUser} history={history}></Profile></Route>

        <Route exact path='/items/add'><AddItemPage></AddItemPage></Route>

        <Route path='/items/delete/:item_id' render={(props) => <DeleteItemPage {...props}/>} />

        <Route exact path='/items/update/:item_id' render={(props) => <EditItemPage {...props}/>} />



  \

        

        <Route path="/signin" component={() => (<SignIn user={user} setUser={setUser} history={history}></SignIn>)} />

        <Route path='/signup'><SignUp></SignUp></Route>

        <Route exact path="/items/:item_id" render={(props) => <ItemDetailsPage location={props.location}></ItemDetailsPage>} />


        

      </Switch>

    </div>
  );
}

export default Router;

