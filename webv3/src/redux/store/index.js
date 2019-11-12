
// https://www.valentinog.com/blog/redux/

import {createStore } from "redux";
import { rootReducer } from "./";


const store = createStore(rootReducer);


export default store;
