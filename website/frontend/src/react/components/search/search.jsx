import React from "react";
import { Col, FormGroup, Label, Input } from "reactstrap";
import { Container } from "react-bootstrap";
import './search.css';

export class Search extends React.Component {
  render() {
    return (
      <Container className="contentSpacing">
        <FormGroup row>
          <Col sm="1"></Col>
          <Label sm={2}>Search</Label>
          <Col sm={8}>
            <Input
              type="search"
              name="search"
              id="search"
              placeholder="Baked Potato..."
            />
          </Col>
          <Col sm="1"></Col>
        </FormGroup>
      </Container>
    );
  }
}
export default Search;
