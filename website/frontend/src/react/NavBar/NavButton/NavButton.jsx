import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "reactstrap";
// import { Container, Row, Col } from "react-bootstrap";
import './NavButton.css';

export class NavButton extends React.Component {
  render(props) {

    return (
        <NavItem className="navCol">
        <Link to={this.props.navAddress} className="navLink">
          {this.props.navText}
        </Link>
      </NavItem>
    );
  }
}

export default NavButton;
