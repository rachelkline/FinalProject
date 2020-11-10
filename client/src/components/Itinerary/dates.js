import React from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, Nav } from "react-bootstrap";
const days = [
    { name: 'Sally McSally', value: '1' },
    { name: 'Bill Billerson', value: '2' },
    { name: 'Frank Smith', value: '3' },
    { name: 'Greg Smith', value: '4' },
    { name: 'Greg Smith', value: '5' },
  ];

function Dates(props) {
    return (
        <>
        {days.map((day, i) => (



    
<Nav.Item>
    <Nav.Link eventKey={"link-"+day.value}>{day.value}</Nav.Link>
  </Nav.Item>


))}
      </>
    );
}

export default Dates;