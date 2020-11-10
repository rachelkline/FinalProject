import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
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
        <Card className="shadow">

        <Card.Body>
              
          <Card.Title style={{ display: "flex" }}><strong>Tuesday</strong>{showHideDemo1 && <Button style={{ marginLeft: "auto" }} onClick={() => this.hideComponent("showHideDemo1")} className="pull-right" size="sm" variant="secondary">+</Button>}
</Card.Title>
          
      <Card.Subtitle className="mb-2 text-muted">November 2020</Card.Subtitle>
       
      {/* {this.state.dates.map((item, index) => ( */}
<Nav variant="pills" defaultActiveKey="/">
        {showHideDemo1 &&<Dates
    // date={item.date}
/>}
{/* ))} */}
</Nav>
<hr/>
      {/* {this.state.dates.map((item, index) => ( */}

        {showHideDemo1 &&<Events
    // title={item.title}
    // location={item.location}
    // time={item.time}

/>}
{/* ))} */}

          {showHideDemo2 && <AddEvent />}
          {showHideDemo2 && <Button className="mr-2" onClick={() => this.hideComponent("showHideDemo1")} variant="outline-primary">Cancel</Button>}
            {showHideDemo2 && <Button onClick={() => this.hideComponent("showHideDemo1")} variant="primary">Confirm</Button>} 

          </Card.Body>
        </Card>

      </div>
    );
  }
}

export default Itinerary;