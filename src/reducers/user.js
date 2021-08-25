import { ADD_USER, LOGIN_USER, REMOVE_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  currentUser: {},
  usersList: [],
  isUserLoggedIn: false
}

const user = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_USER:
      const isRegistered = state.usersList.find((user)=> user.email === action.user.email)
      return {
        ...state,
        currentUser: action.user,
        usersList: isRegistered ? state.usersList : [...state.usersList, action.user]
      }
    
    case LOGIN_USER:
      const userExists = state.usersList.some((user) => user.email === action.user.email)
      return {
        ...state,
        isUserLoggedIn: userExists
      }
    
    case REMOVE_USER:
      const differentUsers = state.usersList.filter((user) => user.email !== action.user.email)
      return {
        ...state,
        usersList: [...differentUsers]
      }

    default:
    return state
    }
}

export default user;