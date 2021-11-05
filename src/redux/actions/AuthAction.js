import { AuthActionType } from './ActionTypes';
import axios from 'axios';

const RegisterAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      //   console.log(userState);
      const response = await axios.post('/auth/signup', userState);
      const { data } = response;
      // console.log(response);
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
      history.push('/');
    } catch (error) {
      console.log(error);
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: error });
    }
  };
};

const LoginAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      //   console.log(userState);
      const response = await axios.post('/auth/login', userState);
      const data = {
        user: response.data.userJwt,
        token: response.data.token,
        roles: response.data.roles,
      };
      // console.log(data);
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });

      if (data.roles.includes('ROLE_ADMIN')) {
        console.log(true);
        history.push('/admin');
      } else {
        console.log(false);
        history.push('/');
      }
    } catch (error) {
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

const LogoutAuthAction = (history) => {
  return (dispatch) => {
    history.push('/signin');
    dispatch({ type: AuthActionType.LOGOUT });
    // console.log(history);
  };
};

export { RegisterAuthAction, LoginAuthAction, LogoutAuthAction };
