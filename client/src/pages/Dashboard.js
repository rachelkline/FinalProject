import React from "react";
import { Link, useLocation } from "react-router-dom";
import Display from "../components/Display";
function Dashboard(props) {
    const location = useLocation();
    return (
        <>
   
           <Display trips={props.trips}/>
        
          

      
   
    
 
    
    </>
    )
}

export default Dashboard;