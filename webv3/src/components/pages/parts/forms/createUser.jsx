import React from "react";
import { LOGIN, SWITCH_LOGIN } from "../../../../redux/constants/action-types";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    swicthPanels: (newPanel) => {
      dispatch({ type: SWITCH_LOGIN, payload: newPanel });
    },
    //This reducer switchs which panel the users is seeing by changing state

    loggingIN: (user) => {
      dispatch({ type: LOGIN, payload: user });
      // This one declears the user is log in and records the users username
    },
  };
};
// Connects this component to my redux reducers so it may call them as funtions

export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regUsername: "",
      regPassword: "",
      regEmail: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //The state hold the value of the input feilds in the form so they can be easierly worked with
  //The bind area makes sure that the component knows to uses it's own funtions

  handleClick = () => {
    this.props.swicthPanels(this.props.logInPanel);
  };
  //On Click runs the redux statement to switch panels

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4200/api/users/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.regUsername,
        accountPassword: this.state.regPassword,
        email: this.state.regEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === "User item record created") {
          console.log("201");
          this.props.loggingIN(this.state.regUsername);
        } else {
          console.log("wrong number");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("User added");
  }
  //An api call which trys and creates a new user.
  //If the call works and receieves the correct message it preforms the login code

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }
  //This funtion takes the id of an input feild and compairs it to the name of the states validles and then changes them accordingly.

  render() {
    return (
      <Form className="formBox">
        <FormGroup>
          <Col className="formTitle">Please Enter Details!</Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Username</Label>
          <Col sm={10}>
            <Input
              onChange={this.handleChange}
              value={this.state.regUsername}
              type="username"
              name="username"
              id="regUsername"
              placeholder="e.g. Greg123"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input
              onChange={this.handleChange}
              value={this.state.regPassword}
              type="password"
              name="password"
              id="regPassword"
              placeholder="**************"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input
              onChange={this.handleChange}
              value={this.state.regEmail}
              type="email"
              name="email"
              id="regEmail"
              placeholder="test-test@gmail.com"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Button onClick={this.handleSubmit}>Create Account</Button>
          <Button onClick={this.handleClick}>Log In</Button>
        </FormGroup>

        <Col md={6}>
          <FormGroup></FormGroup>
        </Col>
      </Form>
    );
  }
}

const ConnectedCreateUser = connect(null, mapDispatchToProps)(CreateUser);

export default ConnectedCreateUser;
