import React, { Component } from 'react';
import { connect } from "react-redux";
//import {Container, Row, Col } from 'react-bootstrap';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {CreateUser} from './createUser';
//import { switchLogIn } from '../../../redux/actions/index'
import { SWITCH_LOGIN } from '../../../redux/constants/action-types';




const mapStateToProps = state => {
    return { logInPanel: state.logInPanel }
}


const mapDispatchToProps = (dispatch) => {
    return {

        swicthPanels: (newPanel) => {

            dispatch({type: SWITCH_LOGIN, payload: newPanel})

        }
     
    };
  }



class loginRegistration extends Component{

handleClick = () =>{
    this.props.swicthPanels(this.props.logInPanel);
}
render(){
console.log(this.props);
    const {logInPanel} = this.props;

     if(logInPanel === true){
    return (
       
        <Form>
            <FormGroup>
                <Col>
                <h2>Please Log In!</h2>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label sm={2}>Username</Label>
          <Col sm={10}>
            <Input type="username" name="username" id="logInUsername" placeholder="e.g. Greg123" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="logInPassword" placeholder="**************" />
          </Col>
        </FormGroup>
        <Col md={6}>
        <FormGroup>
         
            <Button>Log In</Button>
          
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
         
            <Button onClick={this.handleClick}>Register</Button>
       
        </FormGroup>
        </Col>
      </Form>
    );
     }
     else{
         return(

                <CreateUser></CreateUser>

         );
     }
}
}


const ConnectedLoginRegistration = connect(mapStateToProps, mapDispatchToProps)(loginRegistration);

export default ConnectedLoginRegistration;