import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import LoginForm from "../components/log-in"


function LogIn() {
    // const location = useLocation();
    return (
        <div className="container">
        <Route
          path="/login"
          render={() =>
            <LoginForm
            //   updateUser={this.updateUser}
            />}
        />
        </div>

    )
}

export default LogIn;