import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";


function FriendLedger(props) {
    return (
<>
<Card bg="primary">
  <Card.Body>
    <Card.Title><span><strong>Has Requested -$35</strong></span>{/* {props.title} */}</Card.Title>
    <Row>
        <Col xs={12} md={12}>
    <Card.Subtitle className="mb-2 text-muted">      Some quick example text to build on the card title and make up the bulk of
      the card's content.{/* {props.location} */}</Card.Subtitle>
</Col>

</Row>
  </Card.Body>
</Card>

</>
    );
}

export default FriendLedger;