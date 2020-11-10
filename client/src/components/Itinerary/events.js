import React from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function Events(props) {
    return (
<>
<Card bg="primary">
  <Card.Body>
    <Card.Title><span><strong>Lets do the thing</strong></span>{/* {props.title} */}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">The location{/* {props.location} */}</Card.Subtitle>
        <Card.Text>
        <FontAwesomeIcon icon={faClock} />

    <span> 4:00 {/* {props.time} */}</span>
    </Card.Text>
  </Card.Body>
</Card>
      </>
    );
}

export default Events;