import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import FriendPill from "../friendPill/friendPill";

class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>
      
    
    <Card.Title><strong>Add Expense</strong></Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Select a Friend:</Card.Subtitle> */}


 {/* {this.state.friends.map((item, index) => ( */}


{/* ))} */}
    <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label><span><strong>Enter Amount</strong></span></Form.Label>
    <Form.Control type="email" placeholder="$" />
  </Form.Group>


  <Form.Group controlId="exampleForm.ControlTextarea1">
   
    <Form.Control as="textarea" placeholder="What's it for?" rows={3} />
  </Form.Group>
</Form>
    {/* <Button variant="primary">Request Payment</Button>
    <Button variant="primary">Split Expense</Button> */}
  
</div>;
  }
}

export default Demo2;