import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import {TextVImage} from './components/textVImage.jsx';
import { NavBar2 } from './components/navbar2.jsx';
import { Header } from './components/header.jsx';
import {Search} from './components/search.jsx'
//import {Slideshow} from './components/slideshow.jsx'
import {Footer} from './components/footer.jsx'

const App = () =>
{

return(
    <div>
<Header />
<NavBar2 />
<Search />
<TextVImage />
<Footer />
</div>
);
}


ReactDOM.render(<App />, document.querySelector('#root'));