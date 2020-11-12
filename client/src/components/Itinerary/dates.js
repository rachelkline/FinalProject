import React, { useState } from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, ToggleButton, ButtonGroup } from "react-bootstrap";

function Dates(props) {
        const [checked, setChecked] = useState(false);
        const [radioValue, setRadioValue] = useState('1');
        const [radioDay, setRadioDay] = useState('1');
        return (
          <>
            <ButtonGroup toggle className="overflow-auto">
              {props.radios.map((radio, idx) => (
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
                  checked={radioValue === radio.date  && radioDay === radio.day}
                  onChange={(e) => {
                      setRadioDay(radio.day)
                      setRadioValue(radio.date)
                        props.onClick(radio.date)
                    }}
                >
                  <span>{radio.date}</span>
                </ToggleButton>
              ))}
            </ButtonGroup>
          </>
        );
      }
export default Dates;