import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import FriendPill from "../friendPill/friendPill";

class AddEvent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>
      
    
    <Card.Title><span><strong>Add new event</strong></span></Card.Title>


    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Event Name" />
  </Form.Group>


  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Location" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Time" />
  </Form.Group>
</Form>
    {/* <Button variant="primary">Request Payment</Button>
    <Button variant="primary">Split Expense</Button> */}
  
</div>;
  }
}

export default AddEvent;