import React, { Component } from "react";
 
export class Navbutton extends Component {
    render() {
        this.state = active;
        const buttonText;
        const navLinks = pages.map(page => {
          return (
            <a href={'/' + page}>
              {page}
            </a>
          )
        });
    
        return<div id="navbtn">
            <nav>{navLinks}</nav>
            </div>
            ;
      }
}
 
export default NavBar;