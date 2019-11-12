import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import many parts of the same patch at once
export class AdvanceSearch extends React.Component {
    render() {

// I have started to switch to react bootstrap

        return (
            <Container className="properSpacing">
                <Row>
                    <Col className="advanceSearch">



                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <button>Advanced Search</button>
                        {/* I prefer the standard buttons to the new ones */}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>


        );

    }
}

export default AdvanceSearch;