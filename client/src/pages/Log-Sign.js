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
import API from "../utils/API";

const LogSign = function(props) {
  const [state, setState] = useState({
    loggedIn: false, 
    username: null
  });

  const [trips, setTrips] = useState([]);

  const getTrips= () => { 
    // var tripArr = []   
      API.getUserTrip({})
      .then(results => {
        console.log(results.data)
        setTrips(results.data)
      }
      )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getTrips();
  }, []);

  const {user: username, updateUser} = useContext(AuthContext);
  
  return (
    <Router>
      <Navbar updateUser={updateUser} loggedIn={!!username} />
      {/* greet user if logged in: */}
      <Route path="/trip/:id" render={() => <Dashboard trips={trips}/>}/>
      {/* <Route path="/dashboard" render={() => 
      <Dashboard 
        trips={trips}
      />} 
      /> */}
      <Route path="/newtrip" render={() => <NewTrip trips={trips}/>} />
    </Router>
  );
}

export default LogSign;
