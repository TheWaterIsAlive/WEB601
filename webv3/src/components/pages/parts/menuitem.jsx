import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class Menuitem extends React.Component {

      constructor(props) { //Has infomration past in as a props so that the component can use it
            super(props);
            this.state = ({
                  isFetching: false,
                  items: [], //array to store menu items so multiple can be rendered
            })
      }

      GetMenuItem() {
            fetch('http://localhost:4200/api/menuItem/')
                  .then(res => res.json())
                  .then(data => {
                        if (data.cod === '404') {
                              this.setState({
                                    isFetching: false,
                              })
                        } else {
                              this.setState({
                                    isFetching: true, //Gets all menu items from the menuItem table and stores them in the items state
                                    items: data,
                              });
                        }
                  })
                  .catch(err => {
                        console.log(err);
                  })
      }

      componentDidMount() {
            this.GetMenuItem(); //Get array of items one the comonent is successfully mounted
      }


      render() {

            return (
                  <Container className="menuItem">

                        <Row>
                              <Col>Menu ID</Col>
                              <Col>Name</Col>   
                              <Col>Description</Col>
                              <Col>Cost</Col>
                              {/* Sets up titles for columns */}
                        </Row>

                              {/* Maps menu items so they can all be rendered */}
                        {this.state.items.map((menuItem) => ( 
                              <Row key={menuItem.itemID}> 
                              {/* Loads one menu item per row */}


                                    <Col>{menuItem.menuID}</Col>
                                    <Col>{menuItem.itemName}</Col>

                                    <Col>{menuItem.itemDescription}</Col>
                                    <Col>{menuItem.itemCost}</Col>



                              </Row>
                        ))}

                  </Container>
            );



      }
}

export default Menuitem;