import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class SignIn extends Component {

  constructor(props) {
      super(props);
      this.state = {
        logInUsername: "",
        logInPassword: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
   // Stores the input feilds values and bind handlers to the correct button
  
    handleSubmit(event) {
      event.preventDefault();
  
      fetch("http://localhost:4200/api/users/" + this.state.logInUsername)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.cod === "404") {
            console.log("404");
          } else {
            if (this.state.logInPassword === data[0].accountPassword) {
              this.props.loggingIN(this.state.logInUsername);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // Gets a spicific user.
    // If the user has the correct password loggin is preformed and the state is updated.
  
    handleChange(event) {
      event.preventDefault();
      this.setState({ [event.target.id]: event.target.value });
      // This funtion takes the id of an input feild and compairs it to the name of the states validles and then changes them accordingly.
    };
  
    handleClick(event) {
      this.props.swicthPanels(this.props.logInPanel);
    };
  
    // console.log(this.props);
    // const { logInPanel } = this.props;
  

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