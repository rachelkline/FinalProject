import React, { Component, useState, useContext } from "react";
import {useForm} from 'react-hook-form';
import { Redirect, useLocation, Link } from "react-router-dom";
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

import {AuthContext} from '../../contexts/auth-provider';

import axios from "axios";

const LoginForm = function({setComponentName = () => {}}) {
  const [username, setUsername] = useState();
  const [redirectTo, setRedirectTo] = useState();
  const {register, handleSubmit} = useForm();

  const {updateUser} = useContext(AuthContext);

  const onSubmit = function({password, username}) {
    axios
      .post("/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          setRedirectTo("/dashboard");

          updateUser(username);
        }
      })
      .catch((error) => {
        console.error("login error: ", error);
      });
  }

    if (redirectTo) {
      return (<Redirect to={redirectTo} />);
    }

    return (
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
            <h1>
              <strong>Welcome to Travel Buddy</strong>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="username">
                <Form.Label>
                  <strong>Username</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  className="form-input"
                  size="lg"
                  id="username"
                  name="username"
                  ref={register}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  required
                  size="lg"
                  name="password"
                  ref={register}
                />
              </Form.Group>
              <br />
              <Button
                variant="primary"
                type="submit"
                className="mr-2"
                size="lg"
              >
                <strong>Login</strong>
              </Button>
              <Button variant="outline-primary" size="lg" onClick={() => {setComponentName('signup')}}>
                Sign up
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
  );
}

export default LoginForm;
