/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export class MenuPanel extends React.Component {
  constructor(props) {
    // Has infomration past in as a props so that the component can use it
    super(props);
    this.state = {
      isFetching: false,
      thisID: props.itemID,
    };
  }

  deleteItem() {
    // Sets up the ability to set up there  submint button events
    // event.preventDefault();

    // this.selectID();
    fetch("http://localhost:3007/menuItem/" + this.state.thisID, {
      method: "DEL",
    }).then((response) =>
      response.json().then((json) => {
        return json;
      })
    );
    window.location.reload();
  }
  //     returnID = () => {
  //         this.props.parentCallback(this.state.thisID);
  //    }

  render() {
    if (this.props.edit === "True") {
      return (
        <Container className="menuItem">
          <Row key={this.props.data.itemID}>
            <Row>
              <Col xs="6">Item ID:</Col>
              <Col xs="6">{this.props.data.itemID}</Col>
            </Row>
            <Col>{this.props.data.menuID}</Col>

            <Row>
              <Col>{this.props.data.itemName}</Col>
            </Row>

            <Col>{this.props.data.itemDescription}</Col>
            <Col>{this.props.data.itemCost}</Col>
            <button onClick={this.deleteItem}>Delete</button>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container className="menuItem">
          <Row key={this.props.data.itemID} />

          <Row>
            <Col className="menuFoodName">
              {this.props.data.itemName}#{this.props.data.itemID}
            </Col>
          </Row>

          <Row>
            <Col className="mobile">{this.props.data.itemDescription}</Col>
          </Row>

          <Row>
            <Col>
              Cost:{this.props.data.itemCost}
              {/* <div style={{'backgroundImage': `url(${})`}} /> */}
            </Col>
          </Row>
          <Row>
            {" "}
            <Col>
              <img
                className="menuItemImg"
                alt=""
                src={this.props.data.image}
              ></img>
            </Col>
          </Row>

          {/* </Row> */}
        </Container>
      );
    }
  }
}

export default MenuPanel;
