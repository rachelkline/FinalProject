import React, { Component } from 'react'
import { Redirect, useLocation, Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import { ReactComponent as YourSvg } from './login.svg';

import axios from 'axios'

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/dashboard'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <>
                					<Container>
						<Row>
							<Col xs={12} sm={12} md={6} lg={6}>

								<div style={{ width: 'auto', height: 'auto' }}>
									<ResponsiveEmbed aspectRatio="16by9">
										<YourSvg />
									</ResponsiveEmbed>
								</div>



							</Col>
							<Col xs={12} sm={12} md={6} lg={6}>
								<h1><strong>Welcome to Projectname</strong></h1>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label htmlFor="username"><strong>Username</strong></Form.Label>
										<Form.Control type="text" placeholder="Enter username" className="form-input" size="lg"

											id="username"
											name="username"

											value={this.state.username}
											onChange={this.handleChange} />
								
									</Form.Group>
									

									
									<Form.Group controlId="formBasicPassword">
										<Form.Label htmlFor="password"><strong>Password</strong></Form.Label>
										<Form.Control type="password" placeholder="Password" className="form-input"

											size="lg"
											name="password"
											value={this.state.password}
											onChange={this.handleChange}
										/>
									</Form.Group>
<br/>
									<Button variant="primary" type="submit" className="mr-2"
										onClick={this.handleSubmit} size="lg"
									>
										<strong>Login</strong>
  </Button>
									<Button variant="outline-primary" size="lg" type="submit"><Link to="/login" className={useLocation.pathname === "/login"}>Sign up</Link>
   
  </Button>
								</Form>
							</Col>
						</Row>

					</Container>

                {/* <div>

                    <h4>Login</h4>
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
                                type="submit">Login</button>
                        </div>
                    </form>
                    <button className="btn btn-primary"><Link to="/signup" className={useLocation.pathname === "/signup"}>Or sign up here</Link></button>
                </div> */}
                </>
            )
        }
    }
}

export default LoginForm