import { UserAdminType } from './ActionTypes';
import axios from 'axios';

const getAllUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: UserAdminType.GET_USERS_REQUEST });
    const response = await axios.get(`/admin/users?page=${page}`);
    const { object } = response.data;
    console.log(object);
    dispatch({
      type: UserAdminType.GET_USERS_SUCCESS,
      payload: object,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllUsers };
