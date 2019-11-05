import React from 'react'
import { Link } from 'react-router-dom'
// import { Nav, NavBar } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';


  




const NavBar = () => {
    return (



      

 
        <Container className="contentSpacing">



        <Row className="navRow">
           
                <Col className="navCol">
                    <Link to="/" className="navLink">
                        Home
            </Link>
                </Col>
                <Col className="navCol">
                    <Link to="/Menu" className="navLink" >
                        Menu
                </Link>



                </Col>
                <Col className="navCol">
                    <Link to="/Search" className="navLink" >
                        Search
                </Link>

                </Col>
                <Col className="navCol">
                    <Link to="/Menu/Item" className="navLink">
                        Item
                </Link>
                </Col>
                <Col className="navCol">
                    <Link to="/FAQ" className="navLink">
                        FAQ
                </Link>
                </Col>
            
        </Row>
        </Container>
    )
}

export default NavBar; 