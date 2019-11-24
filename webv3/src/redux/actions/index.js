import { ADD_USER, SWITCH_LOGIN } from "../constants/action-types";

export function addUser(payload){


return {type: ADD_USER, payload};

};


export function switchLogIn(payload){


    return {type: SWITCH_LOGIN, payload};
    
    };
    
    