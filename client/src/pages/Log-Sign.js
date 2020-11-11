import React, { Component } from "react";
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

class LogSign extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then((response) => {
      console.log("Get user response: ");
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null,
        });
      }
    });
  }

  // const location = useLocation();
  render() {
    return (
      <Router>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
        {/* <Route
          path="/"
          render={() => <Login updateUser={this.updateUser} />}
        /> */}
        <Route
          path="/login"
          render={() => <Login updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/newtrip" render={() => <NewTrip />} />
      </Router>
    );
  }
}
export default LogSign;
