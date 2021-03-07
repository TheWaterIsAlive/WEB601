import React from "react";
 import ConnectedCreateUser from "../components/createUser/createUser";
import SignIn from "../components/signIn/signIn";
import { Container, Row, Col } from "react-bootstrap";
import './PageLogin.css';


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

   // console.log(this.props);
   // const { logInPanel } = this.props;

    return (
    <Container>
      <Row>
        <Col>
 
        <SignIn/>
        <ConnectedCreateUser/> 

      </Col>
    </Row>
  </Container>
    )
}

export default PageLogin;
