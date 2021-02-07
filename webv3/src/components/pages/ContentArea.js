import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const ContentArea = (props) => (
  // Has other companents passed into it
  <Container className="contentArea">
    <Row className="contentSpacing">
      <Col xs="12" md="6">
        {/* Sets up the column to display menu items */}
        {/* {props.items} */}
      </Col>
      {/* <Col xs="2"></Col> */}

      <Col xs="12" md="6">
        {/* {props.snapIn} */}
        {/* Allows any set of editing tools to be loaded at once */}
      </Col>
    </Row>
  </Container>
);
export default ContentArea;
