import React from 'react';
import { NavBar } from './compnents/navbar.jsx';
import { Header } from './compnents/header.jsx';
import {Search} from './compnents/search.jsx'
import {Slideshow} from './compnents/slideshow.jsx'
import {Footer} from './compnents/footer.jsx'
//import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Search />
      <Slideshow />
      <Footer />
    </div>
  );
}
}


export default App;
