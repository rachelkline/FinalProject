import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    // console.log(this.props.getTrips)
    // const getTrips = this.props.getTrips()
    // const name = getTrips
    // console.log(name)

    if(this.props.trips) {
      var tripNav = this.props.trips.map(trip => {
        return (
          <Nav.Item key={trip._id}>
                <Nav.Link href={"/trip/" +trip._id}>{trip.name}</Nav.Link>
          </Nav.Item>
        )
      })
    }

    return (
      <div
        className={classNames("sidebar shadow", {
          "is-open": this.props.isOpen,
        })}
      >
        <div className="flex-column pl-5 ml-5">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          ></Button>
          <p>My trips</p>
        </div>

        <Nav className="flex-column pt-2 pl-3">
          {/* <p className="ml-3">Heading</p> */}

          <Nav.Item>
            <Nav.Link href="/newtrip">New Trip</Nav.Link>
          </Nav.Item>
          
          {tripNav}
        </Nav>
      </div>
    );
  }
}

export default SideBar;
