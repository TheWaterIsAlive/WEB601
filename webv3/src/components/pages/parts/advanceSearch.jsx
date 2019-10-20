import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export class AdvanceSearch extends React.Component {
  render() {

  

    return(
        <Container className="properSpacing">
            <Row>
            <Col className="advanceSearch">



            </Col>
            </Row>
            <Row>
                <Col></Col>
            <Col>
                <button>Advanced Search</button>
            </Col>
            <Col></Col>
            </Row>
        </Container>


        );

    }
}

export default AdvanceSearch;