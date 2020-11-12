import React, { Component } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { ReactComponent as YourSvg } from "./login.svg";
import axios from "axios";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login",
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div style={{ width: "auto", height: "auto" }}>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <YourSvg />
                  </ResponsiveEmbed>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <h2>
                  <strong>Sign Up</strong>
                </h2>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label htmlFor="username">
                      <strong>Username</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter username"
                      className="form-input"
                      size="lg"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Label htmlFor="name">
                          <strong>First name</strong>
                        </Form.Label>

                        <Form.Control placeholder="John" size="lg" />
                      </Col>
                      <Col>
                        <Form.Label htmlFor="name">
                          <strong>Last name</strong>
                        </Form.Label>

                        <Form.Control placeholder="Smith" size="lg" />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label htmlFor="password">
                      <strong>Password</strong>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="form-input"
                      size="lg"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <br />
                  <Button
                    variant="primary"
                    type="submit"
                    className="mr-2"
                    onClick={this.handleSubmit}
                    size="lg"
                  >
                    <strong>Submit</strong>
                  </Button>
                  <Button variant="outline-primary" size="lg" type="submit">
                    <Link
                      to="/login"
                      className={useLocation.pathname === "/login"}
                    >
                      Cancel
                    </Link>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
          {/* <div className="SignupForm">
						<h4>Sign up</h4>
						<form className="form-horizontal">
							<div className="form-group">
								<div className="col-1 col-ml-auto">
									<label className="form-label" htmlFor="username">Username</label>
								</div>
								<div className="col-3 col-mr-auto">
									<input className="form-input"
										type="text"
										id="username"
										name="username"
										placeholder="Username"
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-1 col-ml-auto">
									<label className="form-label" htmlFor="password">Password: </label>
								</div>
								<div className="col-3 col-mr-auto">
									<input className="form-input"
										placeholder="password"
										type="password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="form-group ">
								<div className="col-7"></div>
								<button
									className="btn btn-primary col-1 col-mr-auto"
									onClick={this.handleSubmit}
									type="submit"
								>Sign up</button>
							</div>
						</form>
						<button className="btn btn-primary"><Link to="/login" className={useLocation.pathname === "/login"}>Or login here</Link></button>
					</div> */}
        </>
      );
    }
  }
}

export default SignUpForm;
