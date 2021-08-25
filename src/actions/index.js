import { ADD_USER, LOGIN_USER, REMOVE_USER } from './actionTypes';

export const addUser = (user) => ({
  type: ADD_USER,
  user
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  user
});

export const removeUser = (user) => ({
  type: REMOVE_USER,
  user
});
