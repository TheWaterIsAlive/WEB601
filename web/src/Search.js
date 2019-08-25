import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResaultPage from './ResaultPage';
import * as serviceWorker from './serviceWorker';
//import {Search} from './compnents/search.jsx'

ReactDOM.render(<ResaultPage />, document.getElementById('root'));
// ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
