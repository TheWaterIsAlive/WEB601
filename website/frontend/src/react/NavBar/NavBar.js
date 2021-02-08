import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

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
          <NavItem className="navCol">
            <Link to="/" className="navLink">
              Home
            </Link>
          </NavItem>
          <NavItem className="navCol">
            <Link to="/Menu" className="navLink">
              Menu
            </Link>
          </NavItem>
          <NavItem className="navCol">
            <Link to="/Search" className="navLink">
              Search
            </Link>
          </NavItem>
          <NavItem className="navCol">
            <Link to="/Menu/Item" className="navLink">
              Item
            </Link>
          </NavItem>
          <NavItem className="navCol">
            <Link to="/FAQ" className="navLink">
              FAQ
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
      {/* End of the hidden narbar area */}
    </Navbar>
  );
};

export default NavBar;
