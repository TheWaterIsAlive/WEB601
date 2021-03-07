import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import many parts of the same patch at once
import { Search } from "../search/search";
import './advanceSearch.css';

export class AdvanceSearch extends React.Component {
  render() {
    // I have started to switch to react bootstrap

    return (
      <Container className="contentSpacing">
        <Row>
          <Col className="advanceSearch">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            <center>
              <button>Advanced Search</button>
            </center>
            {/* I prefer the standard buttons to the new ones */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdvanceSearch;
