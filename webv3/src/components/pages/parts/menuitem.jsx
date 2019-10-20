import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class Menuitem extends React.Component {

  constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              items: [],
		   })
	}
   
    GetMenuItem() {
        fetch('http://localhost:4200/api/menuItem/')
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                items: data, 
            });
            }
		})
		.catch(err => {
		   console.log(err);
        })	
    }

    componentDidMount() {
        this.GetMenuItem();
  }
  

    render() {
        
             return ( 
            <Container className="menuItem">
                
                  <Row>
                    <Col>Menu ID</Col>
                    <Col>Name</Col>
                    <Col>Description</Col>
                    <Col>Cost</Col>
                    </Row>

                  
              {this.state.items.map((menuItem) => (
               <Row key={menuItem.itemID}>
              
                  
                    <Col>{menuItem.menuID}</Col>
                    <Col>{menuItem.itemName}</Col>
              
                    <Col>{menuItem.itemDescription}</Col>
                    <Col>{menuItem.itemCost}</Col>
                   
                   
                   
                    </Row>
              ))}
            
              </Container>
);
          
        
        
      }
}

export default Menuitem;