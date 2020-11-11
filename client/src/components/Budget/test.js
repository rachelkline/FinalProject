import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Demo1 from "./demo1";
import Demo2 from "./demo2";
import Demo3 from "./demo3";
import "./style.css";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: true,
      showHideDemo2: false,
      showHideDemo3: false
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
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;

    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        <Card className="shadow">
          <Card.Body>
            {showHideDemo1 && <Demo1 />}
            {showHideDemo1 && <Button onClick={() => this.hideComponent("showHideDemo1")} className="mr-2" variant="primary">Request</Button>}
            {showHideDemo1 && <Button onClick={() => this.hideComponent("showHideDemo3")} variant="primary">Split</Button>}

            {showHideDemo2 && <Demo2 />}
            {showHideDemo2 && <Button onClick={() => this.hideComponent("showHideDemo1")} className="mr-2" variant="outline-primary">Cancel</Button>}
            {showHideDemo2 && <Button onClick={() => this.hideComponent("showHideDemo1")} variant="primary">Confirm</Button>}

            {showHideDemo3 && <Demo3 />}
            {showHideDemo3 && <Button onClick={() => this.hideComponent("showHideDemo3")} className="mr-2" variant="outline-primary">Cancel</Button>}
            {showHideDemo3 && <Button onClick={() => this.hideComponent("showHideDemo3")} variant="primary">Confirm</Button>}


          </Card.Body>
        </Card>

      </div>
    );
  }
}

export default Test;