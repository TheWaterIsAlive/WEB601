import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './SearchArea.css';

export const SearchArea = (props) => (
  // Has other companents passed into it
  <Container className="contentArea">
    <Row className="contentSpacing">
      <Col xs="12">
        {/* Sets up the column to display menu items */}
        {/* {props.items} */}
      </Col>
    </Row>
  </Container>
);
export default SearchArea;
