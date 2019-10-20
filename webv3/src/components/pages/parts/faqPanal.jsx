import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export const FaqPanal = () =>{



return(
<Container className="faq">
    <Row>
    <Col className="faqTitle">
        <h2 className="faqTitle"> Is this site free?</h2>
    </Col>
    </Row>
    <Row>
    <Col className="faqBody">
        <p className="faqBody"> This site is free but if you want to give me money please do so!</p>
    </Col>

    </Row>
</Container>
);


}

export default FaqPanal; 