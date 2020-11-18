import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { Collapse } from 'react-collapse';
import FriendLedger from "../FriendLedger/FriendLedger";
// const {Collapse, UnmountClosed} = ReactCollapse;

const friends = [
    { name: 'Expenses Ledger', value: '1' },

];
const ledger = [
    { name: 'Andrew Bretnall', description: 'For the dinner tab', amount:40 },
    { name: 'Rachel Kline', description: 'Drinks and snacks', amount:24 },
    { name: 'Ryan Seckman', description: 'Hotel fees', amount:45 },
    { name: 'Francesca Poliseno', description: 'Gas money', amount:30 },
  ];

class Nested extends React.PureComponent {
    constructor(props) {
        super(props);
        let isOpened = {};
        friends.map((friend, i) => isOpened['friend'+i] = false)
        this.state = { isOpened: isOpened }
    }


    render() {
        ;

        
        // const { isOpened, test } = this.state;
        //   const [radioValue, setRadioValue] = useState('1');

        return (
            <>
                {friends.map((friend, i) => (

                    <Card className="shadow mb-3">
                        <Card.Body>
                            <div className="config">

                                <Card.Title  style={{ display: "flex" }}><span className="mt-1"><strong>{friend.name}</strong></span>

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
                                        onChange={({ target: { checked } }) => {
                                            // let isOpenedNew = isOpened;
                                            // isOpenedNew[i]= checked;
                                            let newState = {}
                                            newState['friend'+i] = checked
                                            this.setState(newState)

                                            // console.log(isOpenedNew);
                                            // console.log(isOpened[i]);
                                        }
                                        
                                        } />
                                </Card.Title>


                            </div>

                            <Collapse
                                key={i}


                                isOpened={this.state['friend'+i]}>
                                <div className="subCollapse">
                         
                                    <FriendLedger ledger={ledger}/>
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