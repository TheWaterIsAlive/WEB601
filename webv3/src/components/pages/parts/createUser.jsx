import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
export class CreateUser extends React.Component {



    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);//Binds button press so that the front knows what is going 
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/users/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": this.regUsername.value,
                "accountPassword": this.regPassword.value,
                "email": this.regEmail.value
            })
        });
        console.log("User added");
    }


    render() {


        return (
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Col>
                <h2>Please Enter Details!</h2>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label sm={2}>Username</Label>
          <Col sm={10}>
            <Input ref={(ref) => { this.regUsername = ref }} type="username" name="username" id="regUsername" placeholder="e.g. Greg123" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Password</Label>
          <Col sm={10}>
            <Input ref={(ref) => { this.regPassword = ref }} type="password" name="password" id="regPassword" placeholder="**************" />
          </Col>
        </FormGroup>
        <Col md={6}>
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input ref={(ref) => { this.regEmail = ref }} type="email" name="email" id="regEmail" placeholder="test-test@gmail.com" />
          </Col>
        </FormGroup>
        <FormGroup>
         
            <Button>Create Account</Button>
          
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


export default CreateUser;