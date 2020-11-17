import React, { useState, useEffect } from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



function Events(props) {
  const [eventArr, setEvents] = useState([]);

  useEffect(() => {
    setEvents("")
    getEvents();
  },[props.dateIndex]);

  const getEvents = () => {
    var newEventArr = []
    props.trip.tripLength[props.dateIndex].events.map(eventData => newEventArr.push(eventData));
    setEvents(newEventArr);
    console.log(eventArr);
  };
    

  if(eventArr.length){
    var tripEventDisplay = eventArr.map(tripData => {
      return (
        <Card.Body>
          <Card.Title><span><strong>{tripData.eventName}</strong></span></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tripData.location}</Card.Subtitle>
              <Card.Text>
              <FontAwesomeIcon icon={faClock} />
          <span> {tripData.time} </span>
          </Card.Text>
        </Card.Body>
      )
    }) 
  } 
  
  return (
    <>
      <Card bg="primary">
        {tripEventDisplay}
      </Card>
    </>
  );
}
    

export default Events;