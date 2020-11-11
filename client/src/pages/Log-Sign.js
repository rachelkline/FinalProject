import React, { Component } from "react";
import API from "../utils/API"
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import axios from 'axios'
import Signup from '../components/sign-up'
import LoginForm from '../components/log-in'
import Navbar from '../components/navbar'
import NewTrip from "./newTrip";
import Dashboard from "./Dashboard";
import LogIn from "./Login";
import Display from "../components/Display";


class LogSign extends Component {
  
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null
        }
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.getTrips = this.getTrips.bind(this)
    }

    

    componentDidMount() {
        this.getUser()
        this.getTrips()
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    

    getTrips() { 
      var tripArr = []   
        API.getUserTrip({})
        .then(results => {
          // console.log(results.data)
          tripArr.push(results.data)
        });
        
        console.log(tripArr)
    }
    
    getUser() {
        axios.get('/user/').then(response => {
          console.log('Get user response: ')
          if (response.data.user) {
            console.log('Get User: There is a user saved in the server session: ')
            this.setState({
              loggedIn: true,
              username: response.data.user.username
            })
          } else {
            console.log('Get user: no user');
            this.setState({
              loggedIn: false,
              username: null
            })
          }
        })
      }

    // const location = useLocation();
    render(){
    return (
        <Router>
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={LoginForm} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route
          path="/dashboard"
          render={() =>
            <Display trips={this.tripArr}/>}
        />
        <Route
          path="/newtrip"
          render={() =>
            <NewTrip />}
        />

      </Router>
    );
}
}
export default LogSign;