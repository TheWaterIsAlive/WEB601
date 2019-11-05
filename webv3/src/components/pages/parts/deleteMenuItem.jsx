import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class DeleteMenuItem extends React.Component {
  
  constructor() {
    super();
    // // this.handleSubmit = this.handleSubmit.bind(this);
    this.state=({

      itemsID: '1'

    });
}


updateID(event){

  this.setState({
    itemsID: event.target.value
  })
}

deleteItem() {// Sets up the ability to set up there  submint button events
  // event.preventDefault();
  fetch('http://localhost:4200/api/menuItem/' + this.state.itemsID, {
    method: 'DELETE'
  });

 
}




  
  
  
  
  render() {



    return (

      <Container className="menuItemBox itemForm">

       
        <Row>
          <Col className="centeredText titleBox">
            <h2>
          Delete Item
          </h2>
          </Col>

        </Row>
        <Row className="contentSpacing">
       <Col> Item ID:</Col>
        <Col><input type="text" value={this.state.itemsID} onChange={this.updateID.bind(this)} id="itemID" name="itemID" autoComplete="off" /></Col>
       
        </Row>
        <Row>
          <Col>
          <center>
        {/* <input type="submit" id="Submit" />  */}
          <button onClick={this.deleteItem.bind(this)}>Delete</button>

          </center>
        
        </Col>
        </Row>



        </Container>

    );

  }
}

export default DeleteMenuItem;