import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MenuPanel } from "./menuPanel";
// import { DeleteMenuItem } from './deleteMenuItem';

export class Menuitem extends React.Component {
  constructor(props) {
    // Has infomration past in as a props so that the component can use it
    super(props);
    this.state = {
      isFetching: false,
      items: [],
      // thisID: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  GetMenuItem() {
    fetch("http://localhost:4200/api/menuItem/")
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          this.setState({
            isFetching: false,
          });
        } else {
          this.setState({
            isFetching: true, // Gets all menu items from the menuItem table and stores them in the items state
            items: data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.GetMenuItem(); // Get array of items one the comonent is successfully mounted
  }

  // handleSubmit(event) {// Sets up the ability to set up there  submint button events
  //       event.preventDefault();

  //       this.selectID();

  //       fetch('http://localhost:4200/api/menuItem/' + this.state.thisID, {
  //             method: 'delete',
  //             headers: { 'Content-Type': 'application/json' }
  //       });
  // };
  // selectID = (childData) => {
  //       this.setState({ thisID: childData });

  // }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      <Container className="menuItemBox">
        <Row className="menuItemTitle">
          <Col>
            <h2 className="centeredText">Menu Items</h2>
          </Col>
        </Row>
        {/* <Row className="menuItem menuItemTitle">
                              <Col>Menu ID</Col>
                              <Col>Name</Col>
                              <Col>Description</Col>
                              <Col>Cost</Col>
                              {/* Sets up titles for columns }
                        </Row> */}

        {/* Maps menu items so they can all be rendered */}
        {this.state.items.map((menuItem) => (
          // eslint-disable-next-line react/jsx-key
          <MenuPanel parentCallback={this.selectID} data={menuItem} edit="False" />
        ))}
        {/* <input type="submit" id='Submit'></input> */}
      </Container>
    );
  }
}

export default Menuitem;
