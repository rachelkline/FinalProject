import React, {useContext} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Display from "../components/Display";
import {AuthContext} from "../contexts/auth-provider"; 

function Dashboard(props) {
    const location = useLocation();
    let { id } = useParams();
    const selectedTrip = props.trips.filter(trip => trip._id === id);
    console.log(id);
    console.log(selectedTrip);
    console.log(props);

    
        
    return (
        <>
            {props.trips.length > 0 &&
           <Display trips={props.trips} trip={selectedTrip[0]}/>
           }
        
          

      
   
    
 
    
    </>
    )
}

export default Dashboard;