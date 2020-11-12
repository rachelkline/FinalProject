import React from "react";
import Test from "../Budget/test";
import Itinerary from "../Itinerary/Itinerary";
import Nested from "../Friends/Friends";

import { Container, Row, Col, Card } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <Container fluid className="p-3">
      <Container className="p-3">
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="mt-4">
          <Col xs={12} sm={12} md={12} lg={6}>
            {/* <Card className="shadow"> */}
            {/* <Card.Body> */}
            <h2>
              <strong>{this.props.trip.name}</strong>
            </h2>
            {/* </Card.Body> */}
            {/* </Card> */}
          </Col>
          {/* <Col xs={12} md={3}>
    <Card className="shadow">
  <Card.Body>Location Goes Here. </Card.Body>
</Card>
    </Col>
    <Col xs={12} md={3}>
    <Card className="shadow">
  <Card.Body>Code: 0G6TY54</Card.Body>
</Card>
    </Col> */}
        </Row>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Test />
            <div className="mt-3">
              <Nested />
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="shadow">
                  <Card.Body>{this.props.trip.location} </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="shadow">
                  <Card.Body>Code: {this.props.trip._id}</Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Itinerary trip={this.props.trip} />
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      </Container>
    );
  }
}

export default Main;
