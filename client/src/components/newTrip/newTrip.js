import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import SideBar from "../sidebar/SideBar";
import Content from "../content/Content";
import { Row, Form, Card, Col, Container, Button } from "react-bootstrap";

class NewTrip extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="App wrapper">
        <Content toggle={this.toggle} isOpen={this.state.isOpen} />
        <Row>
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
        <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}

  <Row className="mt-3">
    <Col xs={12} md={6}>
    <Card className="shadow">
          <Card.Body>
    <div>
      
    
      <Card.Title><strong>Join</strong></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">If a trip has already been created, enter its unique trip code </Card.Subtitle>
  
  

      <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Control type="text" placeholder="Trip Code" />
    </Form.Group>
  
  

  </Form>
  <Button variant="primary">Join Trip</Button>{' '}
      {/* <Button variant="primary">Request Payment</Button>
      <Button variant="primary">Split Expense</Button> */}
    
  </div>
  </Card.Body>
        </Card>
  
    </Col>
    <Col xs={12} md={6}>
    <Card className="shadow">
          <Card.Body>
    <div>
      
    
      <Card.Title><strong>Create</strong></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">placeholder text</Card.Subtitle>
  
  

      <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Control type="text" placeholder="Event Name" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Control type="text" placeholder="Location" />
    </Form.Group>
    <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Control type="text" placeholder="Placeholder for date picking method" />
    </Form.Group>
  
  

  </Form>
  <Button variant="primary">Create Trip</Button>{' '}
      {/* <Button variant="primary">Request Payment</Button>
      <Button variant="primary">Split Expense</Button> */}
    
  </div>
  </Card.Body>
        </Card>

    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}


</Container>

       </Row>
      </div>
    );
  }
}

export default NewTrip;