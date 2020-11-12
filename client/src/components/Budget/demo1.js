import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Graph from "./graph";
class Demo1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Budget"
    };
  }

  render() {
    return <div>
      
    
      <Card.Title className="mb-3"><strong>Expenses Breakdown</strong></Card.Title>
      {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
      
      <Graph data={this.state.data}/>
      
      <br/>
      {/* <Button variant="primary">Request Payment</Button>
      <Button variant="primary">Split Expense</Button> */}
    
  </div>;
  }
}

export default Demo1;