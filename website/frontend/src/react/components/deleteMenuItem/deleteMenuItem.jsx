import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export class DeleteMenuItem extends React.Component {
  constructor() {
    super();
    // // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      itemsID: "1",
    };
  }

  updateID(event) {
    this.setState({
      itemsID: event.target.value,
    });
  }

  deleteItem() {
    // Sets up the ability to set up there  submint button events
    // event.preventDefault();
    fetch("http://localhost:4200/api/menuItem/" + this.state.itemsID, {
      method: "DELETE",
    });
  }

  render() {
    return (
      <div className="formBox">
        <Form>
          <FormGroup>
            <Col className="formTitle">Delete Item</Col>
          </FormGroup>

          <Col md="12">
            <Label> Item ID:</Label>
            <Input
              type="text"
              value={this.state.itemsID}
              onChange={this.updateID.bind(this)}
              id="itemID"
              name="itemID"
              autoComplete="off"
            />
            <Button onClick={this.deleteItem.bind(this)}>Delete</Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default DeleteMenuItem;
