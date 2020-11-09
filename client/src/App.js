import React from "react";
import LogSign from "./pages/Log-Sign";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Display from "./components/Display";


function App() {
  return (

<>

    
   
       
              

  
   
   
    
      <LogSign />
      <div className="App">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
   


    
   
    </>
  );
}


export default App;
