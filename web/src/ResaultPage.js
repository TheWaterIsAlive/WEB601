import React from 'react';
import { NavBar } from './compnents/navbar.jsx';
import { Header } from './compnents/header.jsx';
import {Search} from './compnents/search.jsx'
import {Slideshow} from './compnents/slideshow.jsx'
import {Footer} from './compnents/footer.jsx'
//import './App.css';

class ResaultPage extends React.Component {
  render(){
  return (
    <div className="ResaultPage">
      <Header />
      <NavBar />
      <Search />
      
      <Footer />
    </div>
  );
}
}


export default ResaultPage;
