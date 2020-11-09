import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Dates from "./dates";
import Events from "./events";
import AddEvent from "./addEvent";
// import Demo3 from "./demo3";

class Itinerary extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: true,
      showHideDemo2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
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
    const { showHideDemo1, showHideDemo2 } = this.state;
    return (
      <div>
        <Card>
        {showHideDemo1 && <Button onClick={() => this.hideComponent("showHideDemo1")} variant="primary">+</Button>}

        <Card.Body>
              
          <Card.Title>Tuesday</Card.Title>
          
      <Card.Subtitle className="mb-2 text-muted">November 2 2020</Card.Subtitle>
       
      {/* {this.state.dates.map((item, index) => ( */}

        {showHideDemo1 &&<Dates
    // date={item.date}
/>}
{/* ))} */}
<hr/>
      {/* {this.state.dates.map((item, index) => ( */}

        {showHideDemo1 &&<Events
    // title={item.title}
    // location={item.location}
    // time={item.time}

/>}
{/* ))} */}
  
          {showHideDemo2 && <AddEvent />}
          {showHideDemo2 && <Button onClick={() => this.hideComponent("showHideDemo1")} variant="primary">Cancel</Button>}
            {showHideDemo2 && <Button onClick={() => this.hideComponent("showHideDemo1")} variant="primary">Confirm</Button>} 

          </Card.Body>
        </Card>

      </div>
    );
  }
}

export default Itinerary;