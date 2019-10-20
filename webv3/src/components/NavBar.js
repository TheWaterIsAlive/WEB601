import React from 'react'
import { Link } from 'react-router-dom'
// import { Nav, NavBar } from 'react-bootstrap';



const NavBar = () => {
    return (
       
        <div className="ui  pointing right menu" style={{backgroundColor: 'lightBlue'}}>
            <ul className="navArea">
                <li className="navArea">
            <Link to="/" className="item"  style={{backgroundColor: 'lightGrey'}}>
                Home
            </Link>
            </li>
            <li className="navArea">
                <Link to="/Menu" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Menu
                </Link>
                


                </li>
                <li className="right menu navArea">
                <Link to="/Search" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Search
                </Link>
               
            </li>
            <li className="right menu navArea">
                <Link to="/Menu/Item" className="item" style={{backgroundColor: 'lightGrey'}}>
                    Item
                </Link>
                    </li>
                    <li className="right menu navArea">
                <Link to="/FAQ" className="item" style={{backgroundColor: 'lightGrey'}}>
                    FAQ
                </Link>
                    </li>
            </ul>
        </div>
       
    )
}

export default NavBar; 