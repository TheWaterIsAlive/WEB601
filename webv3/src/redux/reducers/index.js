
import { ADD_USER } from "../constants/action-types";

const initialState = {
    user: []

};



function rootReducer(state = initialState, action){

if (action.type === ADD_USER) {

    return Object.assign({} state, {
        user: state.user.concat(action.payload) });
   
}

    return state;
}

export default rootReducer;