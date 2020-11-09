import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
    
       
       
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
          
        <div className="flex-column pl-5 ml-5">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
          </Button>
          <p>My trips</p>
        </div>

        <Nav className="flex-column pt-2 pl-3">
          {/* <p className="ml-3">Heading</p> */}

          <Nav.Item className="active">
            <Nav.Link href="/dashboard">
              Trip Name
            </Nav.Link>
          </Nav.Item>


          <Nav.Item>
            <Nav.Link href="/newtrip">
              New Trip
            </Nav.Link>
          </Nav.Item>

        </Nav>
        
      </div>
    );
  }
}

export default SideBar;
