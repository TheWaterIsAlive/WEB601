import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export class MenuPanel extends React.Component {

    constructor(props) { //Has infomration past in as a props so that the component can use it
        super(props);
        this.state = ({
            isFetching: false,
            thisID: props.itemID

        })
    }
    deleteItem() {// Sets up the ability to set up there  submint button events
        // event.preventDefault();

        // this.selectID();
        fetch('http://localhost:4200/api/menuItem/' + this.state.thisID, {
            method: 'DEL'
        }).then(response =>
            response.json().then(json => {
                return json;
            })
        );
        window.location.reload();



    };
    //     returnID = () => {
    //         this.props.parentCallback(this.state.thisID);
    //    }

    render() {
        if (this.props.edit === 'True') {
            return (
                <Container className="menuItem">


                    <Row key={this.props.data.itemID}>



                        <Col>{this.props.data.menuID}</Col>
                        <Col>{this.props.data.itemName}</Col>

                        <Col>{this.props.data.itemDescription}</Col>
                        <Col>{this.props.data.itemCost}</Col>
                        <button onClick={this.deleteItem}>Delete</button>


                    </Row>


                </Container>
            );

        } else {
            return (
                <Container className="menuItem">


                    <Row key={this.props.data.itemID}>



                        <Col>{this.props.data.menuID}</Col>
                        <Col>{this.props.data.itemName}</Col>

                        <Col>{this.props.data.itemDescription}</Col>
                        <Col>{this.props.data.itemCost}</Col>



                    </Row>


                </Container>
            );
        }

    }
}

export default MenuPanel;