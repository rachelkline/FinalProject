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
    this.props.hideComponent("showHideDemo1");
    if (this.state.eventName && this.state.location && this.state.time) {
      // var id = this.req.params.id;
      // console.log(id);
      // API.addEvent({
      //   dateIndex: this.props.state.dateIndex,
      //   eventName: this.state.eventName,
      //   location: this.state.location,
      //   time: this.state.time
      // })
      //   .then(() =>
      //     this.setState({
      //       tripName: "",
      //       tripLocation: "",
      //       //redirect to dashboard
      //     })
      //   )
      //   .then(() => {
      //     console.log("success!");
      //     window.location.reload();
      //   })
      //   .catch((err) => console.log(err));
    }
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
