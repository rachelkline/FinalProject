import React from "react";
import Test from "../Budget/test";
import Itinerary from "../Itinerary/Itinerary";
import Nested from "../Friends/Friends";


import { Container, Row, Col, Card } from "react-bootstrap";

class Main extends React.Component {
    render() {
      return (
<Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className="mt-5">
    <Col xs={12} md={6}>
    {/* <Card className="shadow"> */}
  {/* <Card.Body> */}
      <h3><strong>NAME OF THE TRIP.</strong></h3> 
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
    <Col xs={12} md={6}>
      <Test/>
      <div className="mt-3">
      <Nested/>
      </div>
    </Col>
    
    <Col xs={12} md={6}>
        <Row>
        <Col xs={6} md={6}>
    <Card className="shadow">
  <Card.Body>Location Goes Here. </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={6}>
    <Card className="shadow">
  <Card.Body>Code: 0G6TY54</Card.Body>
</Card>
    </Col>
        </Row>
        <br/>
    <Itinerary/>
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}


</Container>
        
      );
    }
  }
  
  export default Main;