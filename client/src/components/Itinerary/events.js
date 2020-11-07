import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge, Nav } from "react-bootstrap";


function Events(props) {
    return (
<>
<Card>
  <Card.Body>
    <Card.Title>Lets do the thing{/* {props.title} */}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">The location{/* {props.location} */}</Card.Subtitle>
    <Card.Text>
      4:00 {/* {props.time} */}
    </Card.Text>
  </Card.Body>
</Card>
      </>
    );
}

export default Events;