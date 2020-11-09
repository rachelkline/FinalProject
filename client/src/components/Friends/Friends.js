import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import {Collapse} from 'react-collapse';
import FriendLedger from "../FriendLedger/FriendLedger";
// const {Collapse, UnmountClosed} = ReactCollapse;



class Nested extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {isOpened: false};
    }
  
  
    render() {
      const {isOpened} = this.state;
  
      return (
        <div>
            <Card>
  <Card.Body>
          <div className="config">
            <label className="label">
              Amanda Allan
              <input
                className="input"
                type="checkbox"
                checked={isOpened}
                onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
            </label>
            <Badge variant="danger">You owe $35</Badge>{' '}
          </div>
  
          <Collapse isOpened={isOpened} hasNestedCollapse>
          <div className="subCollapse">
            <FriendLedger/>
        </div>
          </Collapse>
          </Card.Body>
</Card>
        </div>
      );
    }
  }
  export default Nested;