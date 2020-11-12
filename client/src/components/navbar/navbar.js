import React, { Component, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
// import logo from '../logo.svg';
// import '../App.css';
import axios from "axios";

import {AuthContext} from '../../contexts/auth-provider';

export default function(props) {

  const {logoutUser} = useContext(AuthContext); 

  const logout = function(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          logoutUser();
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-4">
            <section className="navbar-section">
              <Link
                to="/login"
                className="btn btn-link text-secondary"
                onClick={logout}
              >
                <span className="text-secondary">logout</span>
              </Link>
            </section>
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler"></div>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title"></h1>
          </div>
        </header>
      </div>
    )
    // ) :
    // (<Redirect to={{ pathname: '/login' }} />);
};
