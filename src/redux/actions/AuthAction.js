import { AuthActionType } from './ActionTypes';
import axios from 'axios';

const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/auth/signup', userState);
      const { data } = response;
      if (data.errorCode) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: data.errorCode,
        });
      } else {
        history.push('/signin');
        dispatch({
          type: AuthActionType.REGISTER_SUCCESS,
          payload: data.message,
        });
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.data.errorCode);
      }
      const { errorCode } = error.response.data;
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: errorCode });
    }
  };
};

const LoginAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/auth/login', userState);
      const data = {
        user: response.data.userJwt,
        token: response.data.token,
        roles: response.data.roles,
      };
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });

      if (data.roles.includes('ROLE_ADMIN')) {
        history.push('/admin');
      } else {
        history.push('/');
      }
    } catch (error) {
      dispatch({
        type: AuthActionType.LOGIN_FAIL,
        payload: 'Login failed. Check email and password again',
      });
    }
  };
};

const LogoutAuthAction = (history) => {
  return (dispatch) => {
    history.push('/signin');
    dispatch({ type: AuthActionType.LOGOUT });
  };
};

export { RegisterAuthAction, LoginAuthAction, LogoutAuthAction };
