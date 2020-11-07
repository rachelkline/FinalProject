import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./Signup";
import Dashboard from "./Dashboard";

function LogSign() {
    return (
        <Router>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        </Router>
    );
}

export default LogSign;