import {LOGIN, CHANGEPASSWORD, LOGOUT, SIGNUP} from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  userName: null,
  emailId: null,
  firstName: null,
  lastName: null,
  password: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
      };
    case SIGNUP:
      return {
        userName: action.userName,
        emailId: action.emailId,
        firstName: action.firstName,
        lastName: action.lastName,
        password: action.password,
      };

    case CHANGEPASSWORD:
      return {
        token: action.token,
        userId: action.userId,
      };

    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
