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

    };
  
  return state;
}

export default rootReducer;