import React, { Component, useState, useContext } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
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

import { AuthContext } from "../../contexts/auth-provider";

const Signup = ({ setComponentName }) => {
  const [redirectTo, setRedirectTo] = useState();
  const { register, handleSubmit } = useForm();

  const { updateUser } = useContext(AuthContext);

  const onSubmit = function ({ username, password }) {
    //request to server to add a new username/password
    axios
      .post("/user", {
        username,
        password,
      })
      .then((response) => {
        if (!response.data.errmsg) {
          setComponentName("login");
        } else {
          console.log("username already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

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

              <Form.Group controlId="password">
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-input"
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
                <strong>Submit</strong>
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => setComponentName("login")}
              >
                Cancel
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
