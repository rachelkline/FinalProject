import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge, Nav } from "react-bootstrap";


function Dates(props) {
    return (
<>

<Nav variant="pills" defaultActiveKey="/">
    
  <Nav.Item>
      
    <Nav.Link eventKey="link-1">{/* {props.date} */}4</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">5</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">6</Nav.Link>
  </Nav.Item>
</Nav>
      </>
    );
}

export default Dates;