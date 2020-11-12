import React, { useEffect, useState, useContext, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import Signup from "../components/sign-up";
import LoginForm from "../components/log-in";
import Navbar from "../components/navbar";
import NewTrip from "./newTrip";
import Dashboard from "./Dashboard";
import Login from "./Login";
import {AuthContext} from "../contexts/auth-provider"; 

const LogSign = function(props) {
  const [state, setState] = useState({
    loggedIn: false, 
    username: null
  });

  // useEffect(() => {
  //   getUser();
  // }, []);

  const {user: username, updateUser} = useContext(AuthContext);
  
  return (
    <Router>
      <Navbar updateUser={updateUser} loggedIn={!!username} />
      {/* greet user if logged in: */}
      {username && <p>Join the party, {username}!</p>}
      {/* Routes to different components */}
      {/* <Route
        path="/"
        render={() => <Login updateUser={this.updateUser} />}
      /> */}
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/newtrip" render={() => <NewTrip />} />
    </Router>
  );
}

export default LogSign;
