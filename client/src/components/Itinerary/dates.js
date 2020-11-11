import React, { useState } from "react";
import "./itinerary.css";
import { Container, Row, Col, Card, Button, Form, Badge, ToggleButton, ButtonGroup } from "react-bootstrap";

//   ------------------------------------------------------------------------------------------------------------------------
//   ------------------------------------------------------------------------------------------------------------------------
//   -----------------THIS IS DATE STUFF-------------------------------------------------------------------------------------------------------
//   ------------------------------------------------------------------------------------------------------------------------

  var i;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days);
    return dat;
}

function getDates(startDate, stopDate) {
   var dateArray = new Array();
   console.log(dateArray);
   var currentDate = startDate;
   while (currentDate <= stopDate) {
    var currentDate2 = currentDate.getDate();
    var currentDate3 = months[currentDate.getMonth()]
    var currentDate4 = currentDate.getFullYear()
    var currentDate5 = days[currentDate.getDay()]
     dateArray.push({date: currentDate2, month: currentDate3, year: currentDate4, day: currentDate5})
    //  dateArray.push({month: currentDate3})
    //  dateArray.push(currentDate2)


     currentDate = currentDate.addDays(1);
   }
   return dateArray;
 }
 const dateArray = getDates(new Date(), (new Date()).addDays(2));
 for (i = 0; i < dateArray.length; i ++ ) {

}

//   ------------------------------------------------------------------------------------------------------------------------
//   ------------------------------------------------------------------------------------------------------------------------
//   -----------------THIS IS DATE STUFF-------------------------------------------------------------------------------------------------------
//   ------------------------------------------------------------------------------------------------------------------------


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

