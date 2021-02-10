import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignIn extends Component {

    render() {
        return (
        <Form className="formBox">
          <FormGroup>
            <Col className="formTitle">Please Log In!</Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Username</Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                value={this.state.logInUsername}
                type="username"
                name="username"
                id="logInUsername"
                placeholder="e.g. Greg123"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Password</Label>
            <Col sm={10}>
              <Input
                onChange={this.handleChange}
                value={this.state.logInPassword}
                type="password"
                name="password"
                id="logInPassword"
                placeholder="**************"
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Button onClick={this.handleSubmit}>Log In</Button>
            <Button onClick={this.handleClick}>Register</Button>
          </FormGroup>
        </Form>
      );

    }


}
export default SignIn;