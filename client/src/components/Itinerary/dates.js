import React, { useState } from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, ToggleButton, ButtonGroup } from "react-bootstrap";


function Dates(props) {
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
                style={{
                    borderWidth:0,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 40,
                    height: 40,
                   padding:8,
                    borderRadius:50,
                  }}
                className="m-1 overflow-auto"
                  key={idx}
                  type="checkbox"
                  variant="dark"
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                  
                >
                  <span>{radio.value}</span>
                </ToggleButton>
              ))}
            </ButtonGroup>


            
          </>
        );
      }
export default Dates;

