import React from "react";
import { Link, useLocation } from "react-router-dom";
import NewTrip from "../components/newTrip";
function newTrip(props) {
    // const location = useLocation();
    return (
        <>
   
           <NewTrip trips={props.trips}/>
        
          

      
   
    
 
    
    </>
    )
}

export default newTrip;