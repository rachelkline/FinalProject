import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";


function FriendLedger(props) {
    return (
<>
{props.ledger.map((exp, idx) => (

<Card bg="primary mb-3">
  <Card.Body>
  <Card.Title style={{ display: "flex" }}><span><strong>{exp.name}</strong></span>{ <span style={{ marginLeft: "auto" }} className="pull-right" size="sm" variant="secondary"><strong>${exp.amount}</strong></span>}
</Card.Title>    <Row>
        <Col xs={12} md={12}>
    <Card.Subtitle className="mb-2 text-muted">{exp.description}{/* {props.location} */}</Card.Subtitle>
</Col>

</Row>
  </Card.Body>
</Card>
))}
</>
    );
}

export default FriendLedger;