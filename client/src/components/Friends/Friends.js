import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import {Collapse} from 'react-collapse';
import FriendLedger from "../FriendLedger/FriendLedger";
// const {Collapse, UnmountClosed} = ReactCollapse;

const friends = [
    { name: 'Sally McSally', value: '1' },
    { name: 'Bill Billerson', value: '2' },
    { name: 'Frank Smith', value: '3' },
    { name: 'Greg Smith', value: '4' },
  ];

class Nested extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {isOpened: false};
    }
  
  
    render() {
        ;
        
      const {isOpened} = this.state;
    //   const [radioValue, setRadioValue] = useState('1');

      return (
        <>
                          {friends.map((friend, i) => (

            <Card className="shadow mb-3">
  <Card.Body>
          <div className="config">
            

            <Card.Title style={{ display: "flex"}}><strong>{friend.name}</strong>

            <Badge className="ml-2" variant="danger">You owe $35</Badge>{' '}
              <input 
              friends={friends[i]}
                className="input pull-right"
                key={i}
                name="friend"
                type="checkbox"
                value={friend.name}
                onClick={this.handleClick}
          
                style={{ marginLeft: "auto" }}
                checked={i.isOpened}
                onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
                </Card.Title>
            
            
          </div>
  
          <Collapse 
       key={i}
      
     
       isOpened={isOpened}>
          <div className="subCollapse">
            <FriendLedger/>
        </div>
          </Collapse>
          </Card.Body>
</Card>
       ))}
        </>
      );
    }
  }
  export default Nested;