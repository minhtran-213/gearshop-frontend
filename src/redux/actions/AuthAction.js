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
      const response = await axios.post('/auth/signin', userState);
      const data = {
        user: response.data.user,
        token: response.data.token,
        roles: response.data.roles,
      };
      // console.log(data);
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      history.push('/homepage');
    } catch (error) {
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

const LogoutAuthAction = (history) => {
  return (dispatch) => {
    dispatch({ type: AuthActionType.LOGOUT });
    history.push('/');
  };
};

export { RegisterAuthAction, LoginAuthAction, LogoutAuthAction };
