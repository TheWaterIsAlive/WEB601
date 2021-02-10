import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PageMenu from "./PageMenu/PageMenu";
import PageSearch from "./PageSearch/PageSearch";
import connectedPageItem from "./PageItem/PageItem";
import PageFAQ from "./PageFAQ/PageFAQ";
import PageMain from "./PageMain/PageMain";
import PageLogin from "./PageLogin/PageLogin";
import NavBar from "./NavBar/NavBar";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

const App = () => {
  return (
    <Container className="pageStyling">
      <Header />
      <BrowserRouter>
        <Row>
          <Col>
            <NavBar />
            <Route path="/" exact component={PageMain} />
            <Route path="/Menu" exact component={PageMenu} />
            <Route path="/Search" exact component={PageSearch} />
            <Route path="/Menu/Item" exact component={connectedPageItem} />
            <Route path="/FAQ" exact component={PageFAQ} />
            <Route path="Login" exact component={PageLogin} />
          </Col>
        </Row>
      </BrowserRouter>
      <Footer />
    </Container>
  );
};

export default App;
