import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

//Services
import { __GetItems } from "../services/ItemService";
import { __GetUser } from '../services/UserService'
import { __CheckSession } from "../services/UserService";
//Components
import Navbar from "./NavBar";
import ProtectedRoute from "./ProtectedRoute";

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

  console.log('USER AUTH', authenticated)
  console.log('Current User', currentUser)

  const getAllItems = async () => {
    try {
      const data = await __GetItems();
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };



  const verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        setAuthenticated(true);
        setCurrentUser(session.user);
        console.log(session.user)
        history.push(`/users/${session.user.id}`);
      } catch (error) {
        throw error
        // setCurrentUser(null);
        // setAuthenticated(false);
        // localStorage.clear();
      }
    }
  };

     const getUserBackup = async () => {
       if (currentUser) {
        try {
          const user = await __GetUser(currentUser.id)
          console.log(currentUser.id)
          setUser(user)
          } catch {
            console.log('no user yet')
          }
        }
    }

    const toggleAuthenticated = (value, user, currentUser) => {
      setAuthenticated(value);
      setCurrentUser(user);
      setUser(currentUser)
    };

    const handleLogout = () => {   
      setCurrentUser(null)
      setEmail('')
      setPassword('')
      setAuthenticated(false)
      localStorage.clear()
    } 
  

    useEffect(() => {
      getAllItems();
      // getUser()
      verifyTokenValid();
      setPageLoading(false);
      // toggleAuthenticated();
      getUserBackup()
    }, []);



 


  return (
    <div>
      <Navbar
        logout={handleLogout}
        currentUser={currentUser}
        authenticated={authenticated}
        user={user}
      ></Navbar>
      {pageLoading ? (
        <h3>*</h3>
      ) : (
          <Switch>

            <Route exact path="/" component={() => (<LandingPage></LandingPage>)}></Route>

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
              component={(props) =>
                (<BrowsePage
                  item={item}
                  setItem={setItem}
                  setBorrow={setBorrow}
                  user={user}
                  setUser={setUser}
                  history={history}
                  currentUser={currentUser}
                  authenticated={authenticated}
                  {...props}
                ></BrowsePage>
                )}
            />
            {currentUser ?
              <Route
                path="/users/:currentUser_id"
                component={(props) => (
                  <Profile
                    {...props}
                    authenticated={authenticated}
                    borrow={borrow}
                    setBorrow={setBorrow}
                    user={user}
                    setUser={setUser}
                    history={history}
                    currentUser={currentUser}
                  ></Profile>
                )}
              /> : null}

            <Route
              exact path="/items/add"
              component={(props) => (
                <AddItemPage
                  currentUser={currentUser}
                  history={history}
                ></AddItemPage>
              )}
            />

            <Route path="/items/delete/:item_id" render={(props) => <DeleteItemPage {...props} />} />

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

            <Route path="/signup" component={(props) => (<SignUp user={user} setUser={setUser}></SignUp> )}/>

            <Route
              exact
              path="/items/:item_id"
              render={(props) => (
                <ItemDetailsPage location={props.location} currentUser={currentUser} history={history}></ItemDetailsPage>
              )}
            />
          </Switch>
        )}
    </div>
  );
}

export default Router;
