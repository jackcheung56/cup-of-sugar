import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Services
import { __GetItems } from "../services/ItemService";
// import { __GetUser } from '../services/UserService'
import { __CheckSession } from "../services/UserService";
//Components
import Navbar from "./NavBar";
import ProtectedRoute from "./ProtectedRoute";
// import Messenger from "./Messenger";
//Pages
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
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
  const [item, setItem] = useState([]);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [borrow, setBorrow] = useState([]);
  const history = useHistory();
  // give each data it's on state

  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);
  //Functions

  const getAllItems = async () => {
    try {
      const data = await __GetItems();
      // console.log('ROUTER', data)
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItems();
    // getUser()
    verifyTokenValid();
    setPageLoading(false);
    toggleAuthenticated();
  }, []);

  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        setAuthenticated(true);
        setCurrentUser(session.user);
        props.history.push("/users/:user_id");
      } catch (error) {
        setCurrentUser(null);
        setAuthenticated(false);
        localStorage.clear();
      }
    }
  };

  const toggleAuthenticated = (value, user, done) => {
    setAuthenticated(value);
    setCurrentUser(user);
  };

  return (
    <div>
      <Navbar
        currentUser={currentUser}
        authenticated={authenticated}
        user={user}
      ></Navbar>
      {pageLoading ? (
        <h3>*</h3>
      ) : (
        <Switch>
          {/* <Route path="/dms">
            <Messenger />
          </Route> */}
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>

          <Route
            authenticated={authenticated}
            exact
            path="/home"
            component={(props) => (
              <Home {...props} item={item} setItem={setItem}></Home>
            )}
          />

          <Route exact path="/users/all">
            <UserList></UserList>
          </Route>
          <Route
            exact
            path="/items/all"
            component={() => (
              <BrowsePage
                item={item}
                setItem={setItem}
                history={history}
              ></BrowsePage>
            )}
          />
          <Route path="/users/:user_id">
            <Profile
              borrow={borrow}
              setBorrow={setBorrow}
              user={user}
              setUser={setUser}
              history={history}
              currentUser={currentUser}
            ></Profile>
          </Route>
          <Route exact path="/items/add">
            <AddItemPage></AddItemPage>
          </Route>
          <Route
            path="/items/delete/:item_id"
            render={(props) => <DeleteItemPage {...props} />}
          />
          <Route
            exact
            path="/items/update/:item_id"
            render={(props) => <EditItemPage {...props} />}
          />
          <Route
            path="/login"
            component={(props) => (
              <SignIn
                setAuthenticated={setAuthenticated}
                toggleAuthenticated={toggleAuthenticated}
                user={user}
                email={email}
                setCurrentUser={setCurrentUser}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                setUser={setUser}
                history={history}
                {...props}
              ></SignIn>
            )}
          />
          <Route path="/signup">
            <SignUp user={user} setUser={setUser}></SignUp>
          </Route>
          <Route
            exact
            path="/items/:item_id"
            render={(props) => (
              <ItemDetailsPage location={props.location}></ItemDetailsPage>
            )}
          />
        </Switch>
      )}
    </div>
  );
}

export default Router;
