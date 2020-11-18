import React, { Component, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Link } from "react-router-dom";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import axios from "axios";
import {AuthContext} from '../../contexts/auth-provider';
import "./nav.css";
function NavBar(props) {
  const {logoutUser} = useContext(AuthContext);
  const logout = function(event) {
    // event.preventDefault();
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
      <Navbar
        bg="light"
        className="navbar shadow p-3 bg-white color-nav"
        expand
      >
        <Button variant="outline-info" onClick={props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/dashboard" className="ml-4 pt-2">
      Travel Buddy
    </Navbar.Brand>
    <Nav className="justify-content-end ml-auto">
    <Nav.Item>
      <Nav.Link className="colorWhite" 
      href="/login" onClick={logout}>logout</Nav.Link>
    </Nav.Item>
  </Nav>
      </Navbar>
    );
}
export default NavBar;