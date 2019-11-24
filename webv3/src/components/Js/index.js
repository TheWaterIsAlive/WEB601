import store from "../../redux/store/index";
import { addUser } from "../../redux/actions/index";
window.store = store;
window.addUser = addUser;