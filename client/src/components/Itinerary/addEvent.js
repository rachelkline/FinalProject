import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import FriendPill from "../friendPill/friendPill";
import API from "../../utils/API";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      location: "",
      time: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });

    console.log(value);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
    console.log(this.props);
    this.props.hideComponent("showHideDemo1");
    API.addEvent(this.props.trip._id, this.props.dateIndex,this.state);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Card.Title>
          <span>
            <strong>Add new event</strong>
          </span>
        </Card.Title>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group id="eventName" value={this.state.eventName} onChange={this.handleInputChange}>
            <Form.Control name="eventName"  type="text" placeholder="Event Name" />
          </Form.Group>

          <Form.Group id="location" value={this.state.location} onChange={this.handleInputChange}>
            <Form.Control name="location"  type="text" placeholder="Location" />
          </Form.Group>

          <Form.Group id="time" value={this.state.time} onChange={this.handleInputChange}>
            <Form.Control name="time"  type="text" placeholder="Time" />
          </Form.Group>
          <Button
            type="submit"
            // onClick={() => this.props.hideComponent("showHideDemo1")}
            variant="primary"
          >
            Confirm
          </Button>
        </Form>

        {/* <Button variant="primary">Request Payment</Button>
    <Button variant="primary">Split Expense</Button> */}
      </div>
    );
  }
}

export default AddEvent;
