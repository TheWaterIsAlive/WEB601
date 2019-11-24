import React, { Component } from 'react';
import { connect } from "react-redux";
//import {Container, Row, Col } from 'react-bootstrap';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import ConnectedCreateUser from './createUser';
//import { switchLogIn } from '../../../redux/actions/index'
import { SWITCH_LOGIN, LOGIN } from '../../../redux/constants/action-types';




const mapStateToProps = state => {
    return { logInPanel: state.logInPanel }
}


const mapDispatchToProps = (dispatch) => {
    return {

        swicthPanels: (newPanel) => {

            dispatch({type: SWITCH_LOGIN, payload: newPanel})

        },
        loggingIN: (user) => {

            dispatch({type: LOGIN, payload: user})

        }
     
     
    };
  }



class loginRegistration extends Component{

    constructor(props) {
        super(props);
        this.state = {
            logInUsername: "",
            logInPassword: ""
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }





     
    handleSubmit(event) {
        event.preventDefault();
 

        fetch('http://localhost:4200/api/users/' + this.state.logInUsername)
        .then(res => res.json())
        .then(data => {
            console.log(data);
              if (data.cod === '404') {
                   console.log('404');
              } else {

                if(this.state.logInPassword === data[0].accountPassword){
                    this.props.loggingIN(this.state.logInUsername);
                }
                    
              }
        })
        .catch(err => {
              console.log(err);
        })


       
    
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
      }
  
       




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
            <Input onChange={this.handleChange} value={this.state.logInUsername} type="username" name="username" id="logInUsername" placeholder="e.g. Greg123" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} value={this.state.logInPassword} type="password" name="password" id="logInPassword" placeholder="**************" />
          </Col>
        </FormGroup>
        <Col md={6}>
        <FormGroup>
         
            <Button onClick={this.handleSubmit}>Log In</Button>
          
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

                <ConnectedCreateUser></ConnectedCreateUser>

         );
     }
}
}


const ConnectedLoginRegistration = connect(mapStateToProps, mapDispatchToProps)(loginRegistration);

export default ConnectedLoginRegistration;