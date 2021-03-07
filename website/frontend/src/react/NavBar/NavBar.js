import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav} from "reactstrap";
import NavButton from "./NavButton/NavButton";
import './NavBar.css';

const NavBar = () => {
  // Standard Navbar from reactstrap page

  const [isOpen, setIsOpen] = useState(false);
  // Checks to see if Nav bar should be expained

  const toggle = () => setIsOpen(!isOpen);
  // Adds funtionality to the toggle button

  return (
    <Navbar light expand="md" className="navRow">
      <NavbarToggler onClick={toggle} />
      {/* Button which opens the Navbar when it is hidden */}

      <Collapse isOpen={isOpen} navbar>
        {/* Decides which part of the Navbar should be hidden */}

        
        <Nav className="mr-auto" navbar>
        <NavButton navAddress="/" navText="Home"></NavButton>
        <NavButton navAddress="/Menu" navText="Menu"></NavButton>
        <NavButton navAddress="/Search" navText="Search"></NavButton>
        <NavButton navAddress="/Menu/Item" navText="Item"></NavButton>
        <NavButton navAddress="/FAQ" navText="FAQ"></NavButton>
        <NavButton navAddress="/Login" navText="Login"></NavButton>
        </Nav>
      </Collapse>
      {/* End of the hidden narbar area */}
    </Navbar>
  );
};

export default NavBar;
