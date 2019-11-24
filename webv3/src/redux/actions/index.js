import { ADD_USER, SWITCH_LOGIN, LOGIN } from "../constants/action-types";

export function addUser(payload){


return {type: ADD_USER, payload};

};

export function logIn(payload){


    return {type: LOGIN, payload};
    
    };

export function switchLogIn(payload){


    return {type: SWITCH_LOGIN, payload};
    
    };
    
    