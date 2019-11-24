import store from "../../redux/store/index";
import { addUser } from "../../redux/actions/index";
window.store = store;
window.addUser = addUser;

// This code file is for debugging AND MUST BE REMOVED before website is released.