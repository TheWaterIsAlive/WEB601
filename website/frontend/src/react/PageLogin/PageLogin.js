import React from "react";
import { connect } from "react-redux";
// import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import ConnectedCreateUser from "../components/createUser/createUser";
import SignIn from "../components/signIn/signIn";
import { SWITCH_LOGIN, LOGIN } from "../../redux/constants/action-types";
import { Container, Row, Col } from "react-bootstrap";
// import "./forms.css";
import './PageLogin.css';

const mapStateToProps = (state) => {
  return { logInPanel: state.logInPanel };
};
// Loads the state of the panel from the redux store

const mapDispatchToProps = (dispatch) => {
  return {
    swicthPanels: (newPanel) => {
      dispatch({ type: SWITCH_LOGIN, payload: newPanel });
    },
    loggingIN: (user) => {
      dispatch({ type: LOGIN, payload: user });
    },
  };
};
// Loads the reducers from the action class and sets them to funtions.

const PageLogin = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     logInUsername: "",
  //     logInPassword: "",
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // Stores the input feilds values and bind handlers to the correct button

  // handleSubmit(event) {
  //   event.preventDefault();

  //   fetch("http://localhost:4200/api/users/" + this.state.logInUsername)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.cod === "404") {
  //         console.log("404");
  //       } else {
  //         if (this.state.logInPassword === data[0].accountPassword) {
  //           this.props.loggingIN(this.state.logInUsername);
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // Gets a spicific user.
  // If the user has the correct password loggin is preformed and the state is updated.

  // handleChange(event) {
  //   event.preventDefault();
  //   this.setState({ [event.target.id]: event.target.value });
  //   // This funtion takes the id of an input feild and compairs it to the name of the states validles and then changes them accordingly.
  // };

  // handleClick(event) {
  //   this.props.swicthPanels(this.props.logInPanel);
  // };

    console.log(this.props);
   // const { logInPanel } = this.props;


    <Container>
      <Row>
        <Col>
 
        <SignIn/>
        <ConnectedCreateUser/>

      </Col>
    </Row>
  </Container>
}

const ConnectedLoginRegistration = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageLogin);

export default ConnectedLoginRegistration;
