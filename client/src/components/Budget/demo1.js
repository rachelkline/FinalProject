import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Demo1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Budget"
    };
  }

  render() {
    return <div>
      
    
      <Card.Title>Budget</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content. This is where the graphs are going when we get to it or something idk
      </Card.Text>
      {/* <Button variant="primary">Request Payment</Button>
      <Button variant="primary">Split Expense</Button> */}
    
  </div>;
  }
}

export default Demo1;