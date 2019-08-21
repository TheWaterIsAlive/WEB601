import React from 'react';
import { NavBar } from './compnents/navbar.jsx';
import { Header } from './compnents/header.jsx';
import {Search} from './compnents/search.jsx'
import {SlideShow} from './compnents/slideshow.jsx'
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Search />
      <SlideShow />
    </div>
  );
}
}


export default App;
