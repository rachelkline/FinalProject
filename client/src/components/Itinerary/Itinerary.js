import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import Dates from "./dates";
import Events from "./events";
import AddEvent from "./addEvent";
// import Demo3 from "./demo3";
const dayss = [
  { name: "Monday", date: "1", month: "November 2020" },
  { name: "Tuesday", date: "2", month: "November 2020" },
  { name: "Wednesday", date: "3", month: "November 2020" },
  { name: "Thursday", date: "4", month: "November 2020" },
  { name: "Friday", date: "5", month: "November 2020" },
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class Itinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideDemo1: true,
      showHideDemo2: false,
      dateIndex: 0,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(dateIndex) {
    console.log("test");
    var dateZero = dateIndex - parseInt(this.props.trip.tripLength[0].date);
    this.setState({ dateIndex: dateZero });
    console.log(dateZero);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
    }
  }

  render() {
    const radios = this.props.trip.tripLength;
    console.log(radios);

    const { showHideDemo1, showHideDemo2 } = this.state;
    return (
      <div>
        <Card className="shadow">
          <Card.Body>
            <Card.Title style={{ display: "flex" }}>
              <strong>{radios[this.state.dateIndex].day}</strong>
              {showHideDemo1 && (
                <Button
                  style={{ marginLeft: "auto" }}
                  onClick={() => this.hideComponent("showHideDemo1")}
                  className="pull-right"
                  size="sm"
                  variant="secondary"
                >
                  +
                </Button>
              )}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.trip.tripLength[0].month}{" "}
              {this.props.trip.tripLength[0].year}
            </Card.Subtitle>
            {/* {this.state.dates.map((item, index) => ( */}
            {/* {days.map((day, i) => ( */}
            <div>
              <Dates
                radios={radios}
                onClick={this.handleClick}
                // date={item.date}
              />
            </div>
            {/* ))}  */}
            <hr />
            {/* {this.state.dates.map((item, index) => ( */}
            {showHideDemo1 && (
              <Events onClick={() => this.hideComponent("showHideDemo1")}
              // title={item.title}
              // location={item.location}
              // time={item.time}
              />
            )}
            {/* ))} */}
            {showHideDemo2 && <AddEvent hideComponent = {this.hideComponent} dateIndex={this.state.dateIndex}/>}
            {/* {showHideDemo2 && (
              <Button
                className="mr-2"
                onClick={() => this.hideComponent("showHideDemo1")}
                variant="outline-primary"
              >
                Cancel
              </Button>
            )} */}
            {/* {showHideDemo2 && (
              <Button
                onClick={() => this.hideComponent("showHideDemo1")}
                variant="primary"
              >
                Confirm
              </Button>
            )} */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Itinerary;
