import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import './footer.css';

export class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="footer">
            <p className="footer"></p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
