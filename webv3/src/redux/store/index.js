
// https://www.valentinog.com/blog/redux/
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);




export default store;