import { ADD_USER, SWITCH_LOGIN, LOGIN } from "../constants/action-types";

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  };
}

// Passes the correct informations to have the reducers record a user

export function logIn(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

// Passes the correct informations to have the reducers set the user to be logged in and stores the users name
export function switchLogIn(payload) {
  return {
    type: SWITCH_LOGIN,
    payload,
  };
}

// Passes the correct informations to have the reducers to swith between two panels
