import React from "react";

import { AdvanceSearch } from "./parts/advanceSearch";
// import {ContentSpace} from './parts/contentSpace'
import { Menuitem } from "./parts/menuitem";
import { SearchArea } from "./SearchArea";
import { Container, Row, Col } from "react-bootstrap";

const PageSearch = () => {
  return (
    <Container>
      <AdvanceSearch />
      <Row>
        <Col sm="1" md="3"></Col>
        <Col sm="10" md="6">
          <SearchArea items={<Menuitem />}></SearchArea>
          {/* <ContentSpace children={Menuitem} /> */}
        </Col>
        <Col sm="1" md="3"></Col>
      </Row>
    </Container>
  );
};

export default PageSearch;
