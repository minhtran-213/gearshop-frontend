import { AuthActionType } from '../actions/ActionTypes';
import axios from 'axios';

const authState = {
  isLoggedIn: false,
  message: '',
  user: {},
  token: '',
  roles: [],
  errorCode: '',
};
const getAuthState = () => {
  try {
    const auth = localStorage.getItem('user');
    if (auth) {
      const authObj = JSON.parse(auth);
      const { token } = authObj;
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return authObj;
    }
    return authState;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      return {
        ...state,
        ...{ message: action.payload.message },
      };
    case AuthActionType.LOGIN_SUCCESS:
      let newState = {
        ...state,
        ...{
          isLoggedIn: true,
          user: action.payload.user,
          token: action.payload.token,
          roles: action.payload.roles,
        },
      };
      localStorage.setItem('user', JSON.stringify(newState));
      return newState;
    case AuthActionType.LOGIN_FAIL:
      return { ...state, ...{ errorCode: action.payload } };
    case AuthActionType.REGISTER_FAIL:
      return { ...state, ...{ errorCode: action.payload } };
    case AuthActionType.LOGOUT:
      localStorage.removeItem('user');
      return authState;
    default:
      return state;
  }
};

export default authReducer;
