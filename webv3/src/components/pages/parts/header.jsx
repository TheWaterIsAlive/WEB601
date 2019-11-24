import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';



export class Header extends React.Component {
  render() {
    return (
      <Container className="headerStyling">
      <Row>
        <Col xs="3" className="mobile" >
        <img src="https://lh3.googleusercontent.com/cG1l-F-5N6CrVxg4KBBSRrZ5vsEJJHaj_diNDiI4Lm04Tjz-FooHY8RUQXPVBzEpHhTLWqg9x5WgjMEsMHiZ8GxUHSQ178uEmOcXNKKgmsd09Cinm2LAG3VVB6ZHPoGEmD59zO1Zpw=w2400" alt="Bee" className="header" /> 
        {/* Loads and image from my google photos */}
        </Col>
        <Col xs="9" className="headerText">
          <Row>
            <Col>
            <h1 className="headerStyling">Nelson<br/> Foods</h1>
            </Col>

          </Row>
         
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;