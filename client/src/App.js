import React, {useContext} from "react";
import LogSign from "./pages/Log-Sign";

import { Redirect, BrowserRouter as Router, Route } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Display from "./components/Display";

import {AuthComponent, AuthContext} from './contexts/auth-provider';

function App() {
  return (
    <Router>
      <AuthComponent>
        <LogSign/>
      </AuthComponent>
    </Router>
  );
}

export default App;
