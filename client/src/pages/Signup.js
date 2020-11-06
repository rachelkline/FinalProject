import React from "react";
import { Link, useLocation } from "react-router-dom";

function SignUp() {
    const location = useLocation();
    return (
        <div className="container">
            <h1>Sign Up Form</h1>
            <form className="signUp">
                <div className="row">
                    <div className="input-field">
                        <input id="first-name" type="text" className="validate" placeholder="First Name" />
                    </div>
                    <div className="input-field">
                        <input id="last-name" type="text" className="validate" placeholder="Last Name" />
                    </div>
                    <div className="input-field">
                        <input id="email" type="text" className="validate" placeholder="Email Address" />
                    </div>
                    <div className="input-field">
                        <input id="password" type="text" className="validate" placeholder="Password" />
                    </div>
                </div>
                <div class="row">
                    <div class="col s2">
                        <button type="submit" class="btn">
                            Sign Up</button>
                    </div>
                    <p>Or log in <Link to="/login" className={location.pathname === "/login"}>here</Link></p>
                </div>
            </form>
        </div>
    )
}

export default SignUp;