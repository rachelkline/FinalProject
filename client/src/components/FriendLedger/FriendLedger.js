import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";


function FriendLedger(props) {
    return (
<>
        <Card>
  <Card.Body>
    <Card.Title>Has Requested <span>-$35</span></Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</>
    );
}

export default FriendLedger;