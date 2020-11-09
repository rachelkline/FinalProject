import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col, Card, Button, Form, Badge, ToggleButton, ButtonGroup } from "react-bootstrap";


function FriendPill(props) {
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
      
        const radios = [
          { name: 'Sally McSally', value: '1' },
          { name: 'Bill Billerson', value: '2' },
          { name: 'Frank Smith', value: '3' },
          { name: 'Greg Smith', value: '4' },
        ];
      
        return (
          <>
            {/* <ButtonGroup toggle className="mb-2">
              <ToggleButton
                type="checkbox"
                variant="secondary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
              >
                Checked
              </ToggleButton> */}
            {/* </ButtonGroup> */}
            <ButtonGroup toggle className="overflow-auto">
              {radios.map((radio, idx) => (
                <ToggleButton
                size="sm"
                className="m-1 overflow-auto"
                  key={idx}
                  type="checkbox"
                  variant="light"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <br/>
          </>
        );
      }
export default FriendPill;
