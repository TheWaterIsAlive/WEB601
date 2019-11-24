import React from 'react';
import {LOGIN} from '../../../redux/constants/action-types'
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {

        loggingIN: (user) => {

            dispatch({type: LOGIN, payload: user})

        }
     
    };
  }



export class CreateUser extends React.Component {


    

    constructor(props) {
        super(props);
        this.state = {
            regUsername: "",
            regPassword: "",
            regEmail: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }




    
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/users/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": this.state.regUsername,
                "accountPassword": this.state.regPassword,
                "email": this.state.regEmail
            })
        }).then(res => res.json())
		.then(data => {
            console.log(data);
			if(data === 'User item record created') {
                console.log('201')
                this.props.loggingIN(this.state.regUsername);
            } 
            else{
                console.log('wrong number')

            }
		})
		.catch(err => {
		   console.log(err);
        })	




        // .then(res => {
        //     // if (res.body === 'User item record created'){
        //        

        //     // }
        // });
        console.log("User added");
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.id]: event.target.value });
      }

    render() {


        return (
            <Form>
            <FormGroup>
                <Col>
                <h2>Please Enter Details!</h2>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label sm={2}>Username</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} value={this.state.regUsername} type="username" name="username" id="regUsername" placeholder="e.g. Greg123" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} value={this.state.regPassword} type="password" name="password" id="regPassword" placeholder="**************" />
          </Col>
        </FormGroup>
        <Col md={6}>
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input onChange={this.handleChange} value={this.state.regEmail} type="email" name="email" id="regEmail" placeholder="test-test@gmail.com" />
          </Col>
        </FormGroup>
        <FormGroup>
         
            <Button onClick={this.handleSubmit}>Create Account</Button>
          
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        {/* <input type="submit" className="btn" id="Submit"/> */}
            {/* <Button onClick={this.handleClick}>Register</Button> */}
       
        </FormGroup>
        </Col>
      </Form>

        )
    }
}

const ConnectedCreateUser = connect(null, mapDispatchToProps)(CreateUser);

export default ConnectedCreateUser;