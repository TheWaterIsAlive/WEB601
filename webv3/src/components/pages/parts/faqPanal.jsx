/* eslint-disable react/prop-types */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";






export const FaqPanal = (props) => {
  
  return (
    <Container className="faqBox">
      <Row>
        <Col>
          <h2> {props.faqTitle}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p> {props.faqText}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FaqPanal;
