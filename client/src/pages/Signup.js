import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link, useLocation } from 'react-router-dom'
// components
import SignUpForm from '../components/sign-up'


    
    
    
 function SignUp() {
    
    return (
        <div className="container">
            {/* <h1>Sign Up Form</h1> */}
            <Route
          path="/signup"
          render={() =>
            <SignUpForm />}
        />
        </div>
        
    )
}


export default SignUp;