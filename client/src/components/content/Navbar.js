import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 bg-white rounded"
        expand
      >
        <Button variant="outline-info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      </Navbar>
      
    );
  }
}

export default NavBar;
