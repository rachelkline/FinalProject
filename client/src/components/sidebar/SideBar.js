import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faPen,
  faCopy,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import "./style.css";


class SideBar extends React.Component {
  render() {
    // console.log(this.props.getTrips)
    // const getTrips = this.props.getTrips()
    // const name = getTrips
    // console.log(name)
    const briefcase = <FontAwesomeIcon icon={faBriefcase} />
    if(this.props.trips) {
      var tripNav = this.props.trips.map(trip => {
        return (
          <Nav.Item key={trip._id}>
                <Nav.Link href={"/trip/" +trip._id}>{briefcase} {'\u00A0'} {trip.name}</Nav.Link>
          </Nav.Item>
        )
      })
    }
    const pen = <FontAwesomeIcon icon={faPen} />
    return (
      <div
        className={classNames("sidebar shadow", {
          "is-open": this.props.isOpen,
        })}
      >
        <div className="flex-column">
          <Button
            variant="link"
            onClick={this.props.toggle}
            // style={{ color: "#eee" }}
            className="mt-3 bigtest"
          ></Button>
          <br/>
          <p className="centered mt-3"><strong>MY TRIPS</strong></p>
        </div>

        <Nav className="flex-column pl-3 mt-1 d-flex">
        <hr/>
          {/* <p className="ml-3">Heading</p> */}
          {tripNav}
          <hr/>
          <Nav.Item className="mt-auto">
            <Nav.Link href="/newtrip">{pen} {'\u00A0'} New Trip</Nav.Link>
          </Nav.Item>
          {/* <hr/> */}
        </Nav>
      </div>
    );
  }
}

export default SideBar;
