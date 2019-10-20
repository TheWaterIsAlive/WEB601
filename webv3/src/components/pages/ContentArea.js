import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';




 export const ContentArea = (props) =>  (



<Container>
          <Row>
          <Col>
          {props.items}
          {/* <Menuitem /> */}
          </Col>
        
          
          <Col>
         {props.snapIn}
          {/* {this.props.snapIn1}
          {this.props.snapIn2} */}
            {/* <CreateUser />
            <BuisnessDetail /> */}
          </Col>
          </Row>
        </Container>

)
export default ContentArea