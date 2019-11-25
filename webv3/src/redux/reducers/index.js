import {
  ADD_USER,
  ATTEMPT_LOGIN,
  SWITCH_LOGIN,
  LOGIN
} from "../constants/action-types";

const initialState = {
  users: "",
  loggedIn: false,
  logInPanel: true,
  

};
//users is the username of the current log in user
//login is if the user is logged in
//log in panel is what sort of panel should be displayed


function rootReducer(state = initialState, action) {
  
  console.log(action);
  if (action.type === ADD_USER) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload)
    });
  }
  else if (action.type === ATTEMPT_LOGIN) {
    return Object.assign({}, state, {
      loggedIn: true
    });

  } 
  else if (action.type === SWITCH_LOGIN) {
  
    if (action.payload === true) {
      return Object.assign({}, state, {
        logInPanel: false
      })
    } 

    
    else {
      return Object.assign({}, state, {
          logInPanel: true
        })
      }
    }
    else if (action.type === LOGIN){
      return Object.assign({}, state, {
      
        loggedIn: true,
        users: action.username
      })

    }
   ;
  
  return state;
}

//1 Adds a user
//2 trys to log in
//3 switchs between two panels
//4 Preforms log in funtions
//5 Is the error/default action

export default rootReducer;